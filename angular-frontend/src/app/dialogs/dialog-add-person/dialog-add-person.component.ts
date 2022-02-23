import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Genre} from "../../model/genre";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../model/person";
import {PersonService} from "../../services/person-service/person.service";
import {MovieService} from "../../services/movie-service/movie.service";
import {Movie} from "../../model/movie";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SuccessMessageComponent} from "../../success-message/success-message.component";

@Component({
  selector: 'app-dialog-add-person',
  templateUrl: './dialog-add-person.component.html',
  styleUrls: ['./dialog-add-person.component.scss']
})
export class DialogAddPersonComponent implements OnInit {
  addPersonForm: FormGroup;
  person: Person | undefined;
  persons: Person[] | undefined;
  submitted = false;
  genres: Genre[] | undefined;
  movies: Movie[] | undefined;

  constructor(public dialogRef: MatDialogRef<DialogAddPersonComponent>,
              private formBuilder: FormBuilder,
              private personService: PersonService,
              private movieService: MovieService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    /** ADD PERSON FORM */
    this.addPersonForm = new FormGroup({
      nameFC: new FormControl('', [
        Validators.required
      ]),
      birthDateFC: new FormControl('', [
        Validators.required
      ]),
      biographyFC: new FormControl('', [
        Validators.required
      ]),
      nationalityFC: new FormControl('', [
        Validators.required
      ]),
      personImgFC: new FormControl('', [
        Validators.required
      ]),
      moviesFC: new FormControl('', [
        Validators.required
      ]),
    });

  }

  ngOnInit(): void {
    this.persons = this.data.persons;
    this.movieService.currentMovies.subscribe(movies => {
      // @ts-ignore
      this.movies = JSON.parse(movies);
    });
  }

  /** ADD NEW MOVIE */
  addMovie(): void {
    this.submitted = true;
    // @ts-ignore
    const maxId = Math.max(...this.persons.map(m => m.id), 0);
    const newId = maxId + 1;
    let newPerson = {
      id: newId,
      name: this.addPersonForm.value.nameFC,
      birthDate: '1993-12-17',
      nationality: this.addPersonForm.value.nationalityFC,
      biography: this.addPersonForm.value.biographyFC,
      personImg: 'new.png',
      movies: [],
    };
    // @ts-ignore
    this.personService.addPerson(newPerson)
      .subscribe(
        res => {
          setTimeout(() => {
            this.openSuccessMessage(newPerson.name);
          }, 1000);

          this.dialogRef.close({
            newPerson: newPerson
          });
        },
        err => {
          alert('An error has occurred.');
        });
  }

  /** SUCCESS MESSAGE */
  openSuccessMessage(newPersonName: string) {
    this.snackBar.openFromComponent(SuccessMessageComponent, {
      data: {newPerson: newPersonName},
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  /** CLOSE DIALOG */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
