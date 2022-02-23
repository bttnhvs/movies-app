import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Review} from "../../model/review";
import {ReviewService} from "../../services/review-service/review.service";

@Component({
  selector: 'app-dialog-add-review',
  templateUrl: './dialog-add-review.component.html',
  styleUrls: ['./dialog-add-review.component.scss']
})
export class DialogAddReviewComponent implements OnInit {
  reviewText = '';

  constructor(public dialogRef: MatDialogRef<DialogAddReviewComponent>,
              public reviewService: ReviewService) {
  }

  ngOnInit(): void {
  }

  addReview() {
    const review: Review = {
      id: 1,
      movieId: 1,
      userId: 1,
      review: this.reviewText
    }
    this.reviewService.addReview(review);
  }

  /** CLOSE DIALOG */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
