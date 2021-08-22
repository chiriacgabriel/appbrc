import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  validatingForm: FormGroup;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.validatingForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.validatingForm.get('password');
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.validatingForm = this.formBuilder.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.loginService.login(this.validatingForm.value).subscribe(data => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    }, error => {
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
    });
  }

  reloadPage(): void {
    this.router.navigateByUrl('/dashboard').then();
  }

}
