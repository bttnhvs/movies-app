import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MovieService} from "../../services/movie-service/movie.service";
import {Movie} from "../../model/movie";
import {Router} from "@angular/router";
import {SuccessMessageComponent} from "../../success-message/success-message.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-delete-movie',
  templateUrl: './dialog-delete-movie.component.html',
  styleUrls: ['./dialog-delete-movie.component.scss']
})
export class DialogDeleteMovieComponent implements OnInit {
  movie: Movie | undefined;
  movies: Movie[] | undefined;

  constructor(public dialogRef: MatDialogRef<DialogDeleteMovieComponent>,
              private movieService: MovieService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router) {
  }

  ngOnInit(): void {
    this.movie = this.data.movie;
  }

  /** DELETE MOVIE */
  deleteMovie() {
    if (this.movie) {
      this.movieService.deleteMovie(this.movie.id).subscribe((data) => {
        this.movieService.currentMovies.subscribe(movies => {
          // @ts-ignore
          this.movies = JSON.parse(movies);
        });
        // @ts-ignore
        let index = this.movies.findIndex(x => x.id === this.movie.id);
        if (index !== -1) {
          // @ts-ignore
          if (this.movies) {
            this.movies.splice(index, 1);
            const movies = JSON.stringify(this.movies);
            // @ts-ignore
            this.movieService.setMoviesSub(movies);
          }
        }
        this.dialogRef.close();
        setTimeout(() => {
          this.openSuccessMessage();
        }, 1000);
        this.router.navigate(['/movies']);
      });
    }
  }

  /** SUCCESS MESSAGE */
  openSuccessMessage() {
    this.snackBar.openFromComponent(SuccessMessageComponent, {
      data: {deletedMovie: this.movie?.name},
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  /** CLOSE DIALOG */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
