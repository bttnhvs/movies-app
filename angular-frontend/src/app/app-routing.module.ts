import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {MovieComponent} from "./movie/movie.component";
import {MoviesComponent} from "./movies/movies.component";
import {GenresComponent} from "./genres/genres.component";
import {PersonsComponent} from "./persons/persons.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SignupComponent} from "./signup/signup.component";
import {PersonComponent} from "./person/person.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AuthGuard} from "./security/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'movies', component: MoviesComponent,  canActivate: [AuthGuard]},
  {path: 'movie/:id', component: MovieComponent, canActivate: [AuthGuard]},
  {path: 'genres', component: GenresComponent, canActivate: [AuthGuard]},
  {path: 'persons', component: PersonsComponent, canActivate: [AuthGuard]},
  {path: 'person/:id', component: PersonComponent, canActivate: [AuthGuard]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
