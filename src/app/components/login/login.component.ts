import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    recordar: [''],
  })
  isInvalidForm: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  acceder(): void {
    console.log("validando");
    this.isInvalidForm = this.loginForm.invalid;
    if (this.isInvalidForm) {
      this.loginForm.markAllAsTouched();
    } else {
      console.log('OK');
    }
  }
}
