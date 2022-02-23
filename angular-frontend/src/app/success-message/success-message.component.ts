import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss']
})
export class SuccessMessageComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
              public snackBarRef: MatSnackBarRef<SuccessMessageComponent>) {
  }

  ngOnInit(): void {
  }

  closeSnackBar() {
    this.snackBarRef.dismiss();
  }
}
