import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth/auth.service";
import {SessionStorageService} from "../services/session-storage-service/session-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  state = 'hide';
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService,
    private router: Router) {
    this.signupForm = new FormGroup({
      usernameFormControl: new FormControl('', [
        Validators.required
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

  signup() {
    const newUser = {};

    this.authService.signup(newUser).subscribe((token: any) => {
      this.sessionStorageService.setToken(token);

      this.authService.welcome(token).subscribe((data: any) => {
        // this.response = data;
        this.router.navigate(['/user-profile']);
      });
    });
  }
}
