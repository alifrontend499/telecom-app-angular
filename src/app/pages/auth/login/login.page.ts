import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/comon/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  // styleUrls: ['./login.page.scss'],
  styleUrls: ['../scss/auth-styles.scss'],
})
export class LoginPage implements OnInit {
  loginForm: HTMLFormElement = null
  userEmail: string = ""
  userPassword: string = ""
  constructor(private comServ: CommonService) { }

  ngOnInit() { }
  // handle login for submit
  handleSubmit(ev: KeyboardEvent): void {
    ev.preventDefault()
    const user = 'admin'
    const pass = 'admin'
    const username = ev.target['username'].value.toLowerCase()
    const password = ev.target['password'].value
    if (username !== '' && username === user && password !== '' && password === pass) {
      console.log(this.loginForm)
    } else {
      console.log("Username and password is required")
    }

  }

  // handle login button click  
  handleLoginClick(ev: any): void {
    // ev.preventDefault()
  }

}
