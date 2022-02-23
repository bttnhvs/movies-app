import {Injectable} from '@angular/core';
import {Observable, ReplaySubject, Subject} from "rxjs";
import {Person} from "../../model/person";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {SessionStorageService} from "../session-storage-service/session-storage.service";

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  private personUrl = 'http://localhost:8080/api/v1/person';

  private personsSubject: Subject<Person[]> = new ReplaySubject<Person[]>(1);
  currentPersons = this.personsSubject.asObservable();

  private personSubject: Subject<Person> = new ReplaySubject<Person>(1);
  currentPerson = this.personSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getPersons() {
    const url = `${this.personUrl}/all`;
    return this.http.get<Person[]>(url);
  }

  setPersonsSub(persons: Person[] | undefined) {
    this.personsSubject.next(persons);
  }

  getPerson(id: number) {
    const url = `${this.personUrl}/find/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(person => {
        // @ts-ignore
        const parsedPerson = JSON.parse(person);
        this.personSubject.next(parsedPerson);
      })
    );
  }

  setPersonSub(person: Person) {
    this.personSubject.next(person);
  }

  getPersonSub(): Observable<Person> {
    return this.personSubject.asObservable();
  }

  /** ADD NEW PERSON */
  addPerson(newPerson: any): Observable<any> {
    const url = `${this.personUrl}/add`;
    return this.http.post(url, newPerson);
  }

  /** EDIT PERSON */
  editPerson(editedPerson: any): Observable<any> {
    const url = `${this.personUrl}/update`;
    return this.http.put(url, editedPerson);
  }

  /** DELETE PERSON */
  deletePerson(id: number): Observable<any> {
    const url = `${this.personUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
