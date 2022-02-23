import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PersonService} from "../services/person-service/person.service";
import {Person} from "../model/person";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddPersonComponent} from "../dialogs/dialog-add-person/dialog-add-person.component";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: Person[];
  person: Person | undefined;

  constructor(private personService: PersonService,
              private router: Router,
              public dialog: MatDialog) {
    this.persons = [];

  }

  ngOnInit(): void {
    this.personService.currentPersons.subscribe(persons => {
      // @ts-ignore
      this.persons = JSON.parse(persons);
    });
  }

  openSelectedPerson(id: number) {
    this.person = this.persons?.find(x => x.id === id);
    if (this.person) {
      this.personService.setPersonSub(this.person);
      sessionStorage.setItem('personId', JSON.stringify(this.person?.id));
      this.router.navigate(['/person/' + id]);
    }
  }

  openAddPersonDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPersonComponent, {
      width: '500px',
      data: {persons: this.persons}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res.newPerson) {
        this.personService.getPersons().subscribe(res => {
          // @ts-ignore
          this.persons = JSON.parse(res);
        })
      }
    });
  }
}
