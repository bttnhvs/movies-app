import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SessionStorageService} from "../services/session-storage-service/session-storage.service";
import {AuthService} from "../auth/auth.service";
import {UserService} from "../services/user-service/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('openCloseAlert', [
      state('hide', style({
        opacity: 0,
      })),

      state('show', style({
        opacity: 1,
      })),
      transition('hide <=> show', animate(200)),
    ]),
  ],
})

export class LoginComponent implements OnInit {
  isLoading = false;
  logoutSuccessMessage: string | undefined;
  loginErrorMessage: string | undefined;
  loginForm: FormGroup;
  // restResponse: HttpResponse<RestResponse>;
  state = 'hide';
  hidePassword = true;
  userId: number | undefined;
  authRequest: any = {
    userName: 'javatechie',
    password: 'password'
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.loginForm = new FormGroup({
      usernameFormControl: new FormControl('user1', [
        Validators.required
      ]),
      passwordFormControl: new FormControl('pwsd1', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
    // this.logoutSuccessMessage = this.activatedRoute.snapshot.queryParamMap.get('success');
    // console.log('message:', this.logoutSuccessMessage );
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.loggedout === 'true') {
        this.logoutSuccessMessage = 'You have been successfully logged out';
      }
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    // this.isLoading = true;
    // todo remove the console log in the future
    // console.log(new User(this.loginForm.get('usernameFormControl').value, btoa(this.loginForm.get('passwordFormControl').value)));

    //const passwordValue = this.loginForm.get('passwordFormControl');
    //  const usernameValue = this.loginForm.get('usernameFormControl');
    let credentials: { password: any; username: any } = {
      username: 'user1',
      password: 'pwd1'
    };
    this.authService.login(credentials).subscribe((token: any) => {
      this.sessionStorageService.setToken(token);
      this.authService.welcome(token).subscribe((data: any) => {
        // this.response = data;
        this.router.navigate(['/home']);
      });
    });
  }

  login2() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any) {
    const resp = this.authService.generateToken(authRequest);
    resp.subscribe((token: any) => {
        this.accessApi(token);
        this.sessionStorageService.setToken(token);
        this.sessionStorageService.setIsLoggedIn('true');
        this.userService.setIsLoggedIn(true);
        // this.getUser();
      }
    );
  }

  getUser() {
    this.userService.getUser(1).subscribe((user: User) => {
      const selectedUser = user;
      this.userService.setSelectedUser(selectedUser);
      this.sessionStorageService.setUsername(selectedUser.username);
    });
  }

  public accessApi(token: any) {
    const resp = this.authService.welcome(token);
    resp.subscribe((data: any) => {
      this.router.navigate(['/home']);
    });
  }

  animateOpenMessage() {
    setTimeout(() => {
      this.state = 'show';
    }, 200);
  }

  closeMessage(success: boolean) {
    new Promise(() => {
      this.state === 'hide' ? this.state = 'show' : this.state = 'hide';
    })
      .then(() => {
        setTimeout(() => {
          // this.logoutSuccessMessage = null;
          // this.loginErrorMessage = null;
          if (success === true) {
            this.router.navigate(['/login']);
          }
        }, 200);
      });
  }
}
