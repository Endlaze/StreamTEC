import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EMAIL_REGEXP, NUMBER_REGEXP, TEXT_REGEXP, NUMTEXT_REGEXP, PASSWORD_REGEXP } from '../../const/regex.constants'
import { UserService } from '../../services/user-service/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  submitted: Boolean = false

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(new RegExp(TEXT_REGEXP))]],
      email: ['', [Validators.required, Validators.pattern(new RegExp(EMAIL_REGEXP))]],
      password: ['', [Validators.required, Validators.pattern(new RegExp(PASSWORD_REGEXP))]],
      phone: ['', [Validators.required, Validators.pattern(new RegExp(NUMBER_REGEXP))]],
      birthdate: ['', [Validators.required, Validators.pattern(new RegExp(NUMTEXT_REGEXP))]],
    });
  }

  get form() { return this.signupForm.controls }

  signup = () => {
    let user = this.signupForm.getRawValue();
    this.submitted = true;
    if (this.signupForm.invalid) return

    this.userService.createUser(user).subscribe(res => {
      console.log(res.status)
      console.log(res.body)
    })
    this.signupForm.reset()
    this.submitted = false;

  }
}
