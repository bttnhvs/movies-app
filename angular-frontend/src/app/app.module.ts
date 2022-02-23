import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonsComponent} from './persons/persons.component';
import {GenresComponent} from './genres/genres.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SafePipe} from './pipes/safe.pipe';
import {NgImageSliderModule} from 'ng-image-slider';
import {PersonComponent} from './person/person.component';
import {FilterPipe} from "./header/filter.pipe";
import {HighlightDirective} from "./directives/highlight.directive";
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DialogAddMovieComponent} from './dialogs/dialog-add-movie/dialog-add-movie.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogAddReviewComponent} from './dialogs/dialog-add-review/dialog-add-review.component';
import {DialogEditMovieComponent} from './dialogs/dialog-edit-movie/dialog-edit-movie.component';
import {DialogAddPersonComponent} from './dialogs/dialog-add-person/dialog-add-person.component';
import {DialogEditPersonComponent} from './dialogs/dialog-edit-person/dialog-edit-person.component';
import {DialogDeleteMovieComponent} from './dialogs/dialog-delete-movie/dialog-delete-movie.component';
import {DialogDeletePersonComponent} from './dialogs/dialog-delete-person/dialog-delete-person.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DialogEditUserComponent} from './dialogs/dialog-edit-user/dialog-edit-user.component';
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { SuccessMessageComponent } from './success-message/success-message.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AuthInterceptorService} from "./security/auth-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PersonsComponent,
    GenresComponent,
    PageNotFoundComponent,
    SafePipe,
    PersonComponent,
    FilterPipe,
    HighlightDirective,
    UserProfileComponent,
    DialogAddMovieComponent,
    DialogAddReviewComponent,
    DialogEditMovieComponent,
    DialogAddPersonComponent,
    DialogEditPersonComponent,
    DialogDeleteMovieComponent,
    DialogDeletePersonComponent,
    EditUserComponent,
    DialogEditUserComponent,
    SuccessMessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatCheckboxModule,
    NgbModule,
    NgImageSliderModule,
    MatDialogModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
