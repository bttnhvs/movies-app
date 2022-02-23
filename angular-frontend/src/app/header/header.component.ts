import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Movie} from '../model/movie';
import {Person} from "../model/person";
import {PersonService} from "../services/person-service/person.service";
import {SessionStorageService} from "../services/session-storage-service/session-storage.service";
import {MovieService} from "../services/movie-service/movie.service";
import {UserService} from "../services/user-service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit {
  activeMenuItem: any;
  movies: Movie[] | undefined;
  dataSource: any;
  searchText = '';
  movieNames: string[] = [];
  menu: any;
  @ViewChild('menuDropdown', {static: false}) menuDropdown: ElementRef | undefined;
  $event: any;
  cast: Person[] | undefined;
  isLoggedIn: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private movieService: MovieService,
              private personService: PersonService,
              private _eref: ElementRef,
              private sessionStorageService: SessionStorageService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.movieService.currentMovies.subscribe(movies => {
      // @ts-ignore
      this.movies = JSON.parse(movies);
      this.dataSource = this.movies;
      this.movies?.forEach(movie => {
        this.movieNames.push(movie.name);
      })
    });

    this.personService.currentPersons.subscribe(cast => {
      // @ts-ignore
      this.cast = JSON.parse(cast);
      this.cast?.forEach(person => {
        this.movieNames.push(person.name);
      })
    });
    this.checkHeaderStatus();
  }

  checkHeaderStatus() {
    this.userService.currentIsLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.sessionStorageService.setLogout();
    this.userService.setIsLoggedIn(false);
    this.userService.getIsLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.router.navigate(['/login'], {queryParams: {loggedout: true}});
  }

  openMovie(searchName: string) {
    const movie = this.movies?.find(m => m.name === searchName);
    const person = this.cast?.find(p => p.name === searchName);
    if (movie) {
      this.router.navigate(['/movie/' + movie?.id]);
      this.movieService.setMovieSub(movie);
    } else if (person) {
      this.router.navigate(['/person/' + person?.id]);
      this.personService.setPersonSub(person);
    }
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.searchText = '';
      if (this.menu) {
        this.menu.style.backgroundColor = 'red';
      }
      if (this.menuDropdown && document) {
      }
    }
  }
}
