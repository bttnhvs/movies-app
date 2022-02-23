import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Movie} from "../model/movie";
import {MovieService} from "../services/movie-service/movie.service";
import {Person} from "../model/person";
import {PersonService} from "../services/person-service/person.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddReviewComponent} from "../dialogs/dialog-add-review/dialog-add-review.component";
import {DialogEditMovieComponent} from "../dialogs/dialog-edit-movie/dialog-edit-movie.component";
import {ReviewService} from "../services/review-service/review.service";
import {DialogDeleteMovieComponent} from "../dialogs/dialog-delete-movie/dialog-delete-movie.component";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined;
  imgCollection: Array<object> = [];
  imgSliderImg: string | undefined;
  genreNames: string[] = [];
  showImgSlider = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private movieService: MovieService,
              private personService: PersonService,
              public dialog: MatDialog,
              public reviewService: ReviewService) {
  }

  ngOnInit(): void {
    this.movieService.currentMovie.subscribe((movie: Movie) => {
        // @ts-ignore
        this.movie = movie;
        this.showImageSlider(this.movie.id);
        if (this.movie) {
          this.movie.genres.forEach(genre => {
            this.genreNames.push(genre.name);
          })
          this.setImgSliderImg();
        }
      }
    );
  }

  showImageSlider(id: number) {
    if (id <= 4) {
      this.showImgSlider = true;
    } else {
      this.showImgSlider = false;
    }
  }

  // getReviews(){
  //   this.reviewsService.getReviews().subscribe(reviews => {
  //     this.reviews = reviews;
  //     this.dataService.changeMovies(this.reviews);
  //   });
  // }
  // this.routeSub = this.route.params.subscribe(params => {
  //   console.log(params) //log the entire params object
  //   console.log(params['id']) //log the value of id
  // });

  setImgSliderImg() {
    if (this.movie?.id === 1) {
      this.imgSliderImg = 'fc';
    } else if (this.movie?.id === 2) {
      this.imgSliderImg = 'rg';
    } else if (this.movie?.id === 3) {
      this.imgSliderImg = 'cf';
    } else if (this.movie?.id === 4) {
      this.imgSliderImg = 'ex';
    }
    this.imgCollection = [
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '1.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '1.jpg',
        alt: 'Image 1',
        title: 'Image 1',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '2.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '2.jpg',
        alt: 'Image 2',
        title: 'Image 2',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '3.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '3.jpg',
        alt: 'Image 3',
        title: 'Image 3',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '4.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '4.jpg',
        alt: 'Image 4',
        title: 'Image 4',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '5.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '5.jpg',
        alt: 'Image 5',
        title: 'Image 5',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '6.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '6.jpg',
        alt: 'Image 6',
        title: 'Image 6',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '7.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '7.jpg',
        alt: 'Image 7',
        title: 'Image 7',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '8.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '8.jpg',
        alt: 'Image 8',
        title: 'Image 8',
        imgSize: {width: '400px', height: '200px'}
      },
      {
        image: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '9.jpg',
        thumbImage: 'https://solent-movies.000webhostapp.com/images/' + this.imgSliderImg + '9.jpg',
        alt: 'Image 9',
        title: 'Image 9',
        imgSize: {width: '400px', height: '200px'}
      }
    ];
  }

  getUrl() {
    return "url(../assets/" + this.movie?.coverImg + ")";
  }

  openPersonPage(id: number, selectedPerson: Person) {
    sessionStorage.setItem('personId', JSON.stringify(id));
    this.personService.setPersonSub(selectedPerson);
    this.router.navigate(['/person/' + id]);
  }

  openEditMovieDialog(): void {
    const dialogRef = this.dialog.open(DialogEditMovieComponent, {
      width: '500px',
      data: {movie: this.movie},
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.movie = res.editedMovie;
      }
    });
  }

  openDeleteMovieDialog(): void {
    const dialogRef = this.dialog.open(DialogDeleteMovieComponent, {
      width: '400px',
      data: {movie: this.movie},
    });
    dialogRef.afterClosed().subscribe(newMovie => {
      if (newMovie) {
      }
    });
  }

  openAddReviewDialog(): void {
    const dialogRef = this.dialog.open(DialogAddReviewComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
      }
    });
  }
}
