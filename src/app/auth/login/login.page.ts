import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  // styleUrls: ['./login.page.scss'],
  styleUrls: ['../scss/auth-styles.scss'],
})
export class LoginPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentLoadingWithOptions(msg: string = "", duration: number = 2000, spinner: any = "circles") {
    const loading = await this.loadingController.create({
      spinner: spinner,
      duration: duration,
      message: msg,
      translucent: true,
      cssClass: 'app-loading'
    });
    return await loading.present();
    // const { role, data } = await loading.onDidDismiss();
    // console.log(data)
  }

  // handle login for submit
  handleSubmit(ev: KeyboardEvent): void {
    ev.preventDefault()
    const user = 'admin'
    const pass = 'admin'

    const username = ev.target['username'].value.toLowerCase()
    const password = ev.target['password'].value

    this.presentLoadingWithOptions()

    if (username !== '' && username === user && password !== '' && password === pass) {
      console.log("object")
    } else {
      console.log("Username and password is required")
    }

  }

  // handle login button click  
  handleLoginClick(ev: any): void {
    // ev.preventDefault()
  }

}
