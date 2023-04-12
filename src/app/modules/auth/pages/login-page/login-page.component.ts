import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formLogin:FormGroup = new FormGroup({})
  formEmail:FormControl = new FormControl()

  ngOnInit():void{
    this.formLogin= new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password:new FormControl('',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12)
        ])
      }
    )
  }
  sendLogin():void{
    const body = this.formLogin.value
    console.log("infoForm",body)
  }
}
