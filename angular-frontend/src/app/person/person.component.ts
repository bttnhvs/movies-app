import {Component, OnInit} from '@angular/core';
import {PersonService} from "../services/person-service/person.service";
import {Person} from "../model/person";
import {DialogAddMovieComponent} from "../dialogs/dialog-add-movie/dialog-add-movie.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogEditPersonComponent} from "../dialogs/dialog-edit-person/dialog-edit-person.component";
import {DialogDeletePersonComponent} from "../dialogs/dialog-delete-person/dialog-delete-person.component";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: Person | undefined;

  constructor(private personService: PersonService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.personService.currentPerson.subscribe(person => {
      // @ts-ignore
      this.person = person;
    });
  }

  openEditPersonDialog(): void {
    const dialogRef = this.dialog.open(DialogEditPersonComponent, {
      width: '500px',
      data: { person: this.person }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.person = res.editedPerson;
        // this.movies?.push(newMovie);
      }
    });
  }

  openDeletePersonDialog(): void {
    const dialogRef = this.dialog.open(DialogDeletePersonComponent, {
      width: '400px',
      data: { person: this.person }
    });

    dialogRef.afterClosed().subscribe(newMovie => {
      if (newMovie) {
        // this.movies?.push(newMovie);
      }
    });
  }
}
