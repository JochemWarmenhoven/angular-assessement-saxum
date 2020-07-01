import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../services';
import { PasswordStrengthValidator } from '../shared/password-strength.validators';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          PasswordStrengthValidator,
        ],
      ],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return false;
    }
    const {
      password,
      firstName,
      lastName,
    }: {
      password: string;
      firstName: string;
      lastName: string;
    } = this.registerForm.value;

    if (
      password.includes(firstName.toLowerCase()) ||
      password.includes(lastName.toLowerCase())
    ) {
      // this.error = 'First name or last name in password is not allowed';
      this.registerForm.controls['password'].setErrors({
        nameInPassword: true,
      });
      return false;
    }
    this.loading = true;
    this.userService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([''], {
            queryParams: { registered: true },
          });
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
