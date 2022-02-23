import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../model/movie";
import {MovieService} from "../../services/movie-service/movie.service";
import {Router} from "@angular/router";
import {GenresService} from "../../services/genre-service/genres.service";
import {Genre} from "../../model/genre";
import {SuccessMessageComponent} from "../../success-message/success-message.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-add-movie',
  templateUrl: './dialog-add-movie.component.html',
  styleUrls: ['./dialog-add-movie.component.scss']
})
export class DialogAddMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  movie: Movie | undefined;
  movies: Movie[] | undefined;
  submitted = false;
  genres: Genre[] | undefined;

  constructor(public dialogRef: MatDialogRef<DialogAddMovieComponent>,
              private formBuilder: FormBuilder,
              private movieService: MovieService,
              private router: Router,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private genreService: GenresService,) {
    /** ADD MOVIE FORM */
    this.addMovieForm = new FormGroup({
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
    this.movies = this.data.movies;

    this.genreService.currentGenres.subscribe(genres => {
      // @ts-ignore
      this.genres = JSON.parse(genres);
    });
  }

  /** ADD NEW MOVIE */
  addMovie(): void {
    this.submitted = true;
    // @ts-ignore
    const maxId = Math.max(...this.movies.map(m => m.id), 0);
    const newId = maxId + 1;
    let newMovie = {
      id: newId,
      name: this.addMovieForm.value.nameFC,
      runtime: this.addMovieForm.value.runtimeFC,
      releaseDate: '2015-12-17',
      director: this.addMovieForm.value.directorFC,
      writer: this.addMovieForm.value.writerFC,
      story: this.addMovieForm.value.storyFC,
      trailer: 'https://www.youtube.com/embed/qtRKdVHc-cE',
      albumImg: 'new.png',
      coverImg: 'movie-time.jpg',
      genres: [],
      persons: [],
      reviews: []
    };
    // @ts-ignore
    this.movieService.addMovie(newMovie)
      .subscribe(
        res => {
          setTimeout(() => {
            this.openSuccessMessage(newMovie.name);
          }, 1000);

          this.dialogRef.close({
            moviesUpdated: true,
            newMovie: newMovie
          });
        },
        err => {
          alert('An error has occurred.');
        });
  }

  /** SUCCESS MESSAGE */
  openSuccessMessage(newMovieName: string) {
    this.snackBar.openFromComponent(SuccessMessageComponent, {
      data: {newMovie: newMovieName},
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  /** CLOSE DIALOG */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
