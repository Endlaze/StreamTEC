import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EMAIL_REGEXP, NUMBER_REGEXP, TEXT_REGEXP, NUMTEXT_REGEXP, PASSWORD_REGEXP } from '../../const/regex.constants'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  submitted: Boolean = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(new RegExp(EMAIL_REGEXP))]],
      password: ['', [Validators.required]],
    });
  }

  get form() { return this.loginForm.controls }

  login = () => {
    let formData = this.loginForm.getRawValue();
    this.submitted = true;
    if (this.loginForm.invalid) return
    console.log(formData)
    this.loginForm.reset()
    this.submitted = false;
  }
}



