import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Movie} from 'src/app/model/movie';
import {MovieService} from "../../services/movie-service/movie.service";
import {SuccessMessageComponent} from "../../success-message/success-message.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-edit-movie',
  templateUrl: './dialog-edit-movie.component.html',
  styleUrls: ['./dialog-edit-movie.component.scss']
})
export class DialogEditMovieComponent implements OnInit {
  editMovieForm: FormGroup;
  movie: Movie | undefined;
  submitted = false;

  constructor(public dialogRef: MatDialogRef<DialogEditMovieComponent>,
              private formBuilder: FormBuilder,
              private movieService: MovieService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,) {
    /** UPDATE CLIENT FORM */
    this.editMovieForm = new FormGroup({
      nameFC: new FormControl('', [
        Validators.required
      ]),
      releaseDateFC: new FormControl('', [
        Validators.required
      ]),
      runtimeFC: new FormControl('', [
        Validators.required
      ]),
      directorFC: new FormControl('', [
        Validators.required
      ]),
      writerFC: new FormControl('', [
        Validators.required
      ]),
      trailerDateFC: new FormControl('', [
        Validators.required
      ]),
      storyFC: new FormControl('', [])
    });
  }

  ngOnInit(): void {
    this.movie = this.data.movie;

    /** AUTOCOMPLETE INPUT FIELDS OF UPDATE CLIENT FORM */
    this.autoCompleteForm();
  }

  /** AUTOCOMPLETE INPUT FIELDS OF UPDATE CLIENT FORM */
  autoCompleteForm() {
    if (this.movie) {
      this.editMovieForm.patchValue({
        nameFC: this.movie.name,
        releaseDateFC: this.movie.releaseDate,
        runtimeFC: this.movie.runtime,
        directorFC: this.movie.director,
        writerFC: this.movie.writer,
        trailerFC: this.movie.trailer,
        storyFC: this.movie.story,
        albumImgFC: this.movie.albumImg,
        coverImgFC: this.movie.coverImg,
        genresFC: this.movie.genres,
        personsFC: this.movie.persons,
      });
    }
  }

  /** EDIT MOVIE */
  editMovie(): void {
    this.submitted = true;
    let
      editedMovie = {
        id: this.movie?.id,
        name: this.editMovieForm.value.nameFC,
        runtime: this.editMovieForm.value.runtimeFC,
        releaseDate: this.editMovieForm.value.releaseDateFC,
        director: this.editMovieForm.value.directorFC,
        writer: this.editMovieForm.value.writerFC,
        story: this.editMovieForm.value.storyFC,
        trailer: this.movie?.trailer,
        albumImg: this.movie?.albumImg,
        coverImg: this.movie?.coverImg,
        genres: this.movie?.genres,
        persons: this.movie?.persons,
        reviews: this.movie?.reviews
      };
    // @ts-ignore
    this.movieService.editMovie(editedMovie)
      .subscribe(
        res => {
          setTimeout(() => {
            this.openSuccessMessage();
          }, 1000);
          const editedMovie = JSON.parse(res)
          this.dialogRef.close({
            editedMovie: editedMovie
          });
        },
        err => {
          alert('An error has occurred.');
        });
  }

  /** SUCCESS MESSAGE */
  openSuccessMessage() {
    this.snackBar.openFromComponent(SuccessMessageComponent, {
      data: {editedMovie: this.movie?.name},
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  /** CLOSE DIALOG */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
