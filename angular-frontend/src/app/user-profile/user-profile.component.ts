import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {MatDialog} from "@angular/material/dialog";
import {DialogEditUserComponent} from "../dialogs/dialog-edit-user/dialog-edit-user.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  user: User;

  constructor(public dialog: MatDialog) {
    this.user = {id: 1, name: 'Fiona Doe', username:'fiona.doe', password: 'password', email: 'fiona.doe@gmail.com', userImg:'FionaGallagher.jpeg'}
  }

  ngOnInit(): void {
    // this.userService.getSelectedUser().subscribe(selectedUser =>{
    //   this.user = selectedUser;
    // });
  }

  openEditUserDialog(): void {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(newMovie => {
      if (newMovie) {
        //this.movies?.push(newMovie);
      }
    });
  }
}
