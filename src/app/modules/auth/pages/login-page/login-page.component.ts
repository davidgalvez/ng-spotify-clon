import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/Services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formLogin:FormGroup = new FormGroup({})
  errorLogin:boolean=false
  
  constructor(private _authService: AuthService){

  }

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
    const {email,password} = this.formLogin.value
    this._authService.sendCredentials(email,password)
    //http response: 200 to <400
    .subscribe(responseOk=>{//when user enters correct login info
      console.log("Login successful")
    },
    //http response: >=400
    err=>{
      this.errorLogin=true
      console.log("Error on login, check email and password")
    })

  }
}
