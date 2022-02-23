import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../model/movie";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SuccessMessageComponent} from "../../success-message/success-message.component";
import {PersonService} from "../../services/person-service/person.service";
import {Person} from "../../model/person";
import {MovieService} from "../../services/movie-service/movie.service";

@Component({
  selector: 'app-dialog-edit-person',
  templateUrl: './dialog-edit-person.component.html',
  styleUrls: ['./dialog-edit-person.component.scss']
})
export class DialogEditPersonComponent implements OnInit {
  editPersonForm: FormGroup;
  person: Person | undefined;
  submitted = false;
  movies: Movie[] | undefined;

  constructor(public dialogRef: MatDialogRef<DialogEditPersonComponent>,
              private formBuilder: FormBuilder,
              private personService: PersonService,
              private movieService: MovieService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,) {
    /** UPDATE CLIENT FORM */
    this.editPersonForm = new FormGroup({
      nameFC: new FormControl('', [
        Validators.required
      ]),
      birthDateFC: new FormControl('', [
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
      biographyFC: new FormControl('', [])
    });
  }

  ngOnInit(): void {
    this.person = this.data.person;
    this.movieService.currentMovies.subscribe(movies => {
      // @ts-ignore
      this.movies = JSON.parse(movies);
    });

    /** AUTOCOMPLETE INPUT FIELDS OF UPDATE CLIENT FORM */
    this.autoCompleteForm();
  }

  /** AUTOCOMPLETE INPUT FIELDS OF UPDATE CLIENT FORM */
  autoCompleteForm() {
    if (this.person) {
      this.editPersonForm.patchValue({
        nameFC: this.person.name,
        birthDateFC: this.person.birthDate,
        nationalityFC: this.person.nationality,
        personImgFC: this.person.personImg,
        biographyFC: this.person.biography,
        moviesFC: this.person.movies,
      });
    }
  }

  /** UPDATE CLIENT NEW METHOD */
  editMovie(): void {
    this.submitted = true;
    let
      editedPerson = {
        id: this.person?.id,
        name: this.editPersonForm.value.nameFC,
        nationality: this.editPersonForm.value.nationalityFC,
        birthDate: this.editPersonForm.value.birthDateFC,
        personImg: this.editPersonForm.value.personImgFC,
        biography: this.editPersonForm.value.biographyFC,
        story: this.editPersonForm.value.storyFC,
        movies: this.person?.movies,
      };
    // @ts-ignore
    this.personService.editPerson(editedPerson)
      .subscribe(
        res => {
          setTimeout(() => {
            this.openSuccessMessage();
          }, 1000);

          const editedPerson = JSON.parse(res)
          this.dialogRef.close({
            editedPerson: editedPerson
          });
        },
        err => {
          alert('An error has occurred.');
        });
  }

  /** SUCCESS MESSAGE */
  openSuccessMessage() {
    this.snackBar.openFromComponent(SuccessMessageComponent, {
      data: {editedPerson: this.person?.name},
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  /** CLOSE DIALOG */
  closeDialog(): void {
    this.dialogRef.close();
  }
}

