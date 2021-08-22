import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isRegistered = false;
  isSignUpFailed = false;
  errorMessage = '';
  validatingForm: FormGroup;

  constructor(private registerService: RegisterService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  get firstName(){
    return this.validatingForm.get('firstName');
  }

  // tslint:disable-next-line:typedef
  get lastName() {
    return this.validatingForm.get('lastName');
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.validatingForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.validatingForm.get('password');
  }

  // tslint:disable-next-line:typedef
  get confirmPassword() {
    return this.validatingForm.get('confirmPassword');
  }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.registerService.register(this.validatingForm.value).subscribe(data => {
      this.isRegistered = true;
      this.isSignUpFailed = false;
      this.router.navigateByUrl('/login').then();
    }, error => {
      this.errorMessage = error.error.message;
      this.isSignUpFailed = true;
    });
  }

}
