import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Person} from "../../model/person";
import {PersonService} from "../../services/person-service/person.service";
import {SuccessMessageComponent} from "../../success-message/success-message.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-delete-person',
  templateUrl: './dialog-delete-person.component.html',
  styleUrls: ['./dialog-delete-person.component.scss']
})
export class DialogDeletePersonComponent implements OnInit {
  person: Person | undefined;
  persons: Person[] | undefined;

  constructor(public dialogRef: MatDialogRef<DialogDeletePersonComponent>,
              private personService: PersonService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router) {
  }

  ngOnInit(): void {
    this.person = this.data.person;
  }

  deletePerson() {
    if (this.person) {
      this.personService.deletePerson(this.person.id).subscribe((data) => {
        this.personService.currentPersons.subscribe(persons => {
          // @ts-ignore
          this.persons = JSON.parse(persons);
        });
        // @ts-ignore
        let index = this.persons.findIndex(x => x.id === this.person.id);
        if (index !== -1) {
          if (this.persons) {
            this.persons.splice(index, 1);
            const persons = JSON.stringify(this.persons);
            // @ts-ignore
            this.personService.setPersonsSub(persons);
          }
        }
        this.dialogRef.close();
        setTimeout(() => {
          this.openSuccessMessage();
        }, 1000);
        this.router.navigate(['/persons']);
      });
    }
  }

  /** SUCCESS MESSAGE */
  openSuccessMessage() {
    this.snackBar.openFromComponent(SuccessMessageComponent, {
      data: {deletedPerson: this.person?.name},
      duration: 5000,
      verticalPosition: 'top'
    });
  }

  /** CLOSE DIALOG */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
