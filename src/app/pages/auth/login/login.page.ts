import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core'
import { CommonService } from 'src/app/_services/comon/common.service'
import { Router } from '@angular/router'
import { AuthenticationService } from 'src/app/_services/auth/authentication.service'
import { AlertController, Platform } from '@ionic/angular'
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	// styleUrls: ['./login.page.scss'],
	styleUrls: ['../scss/auth-styles.scss'],
})
export class LoginPage implements OnInit, OnDestroy, AfterViewInit {
	loginForm: HTMLFormElement = null
	userName: string = ""
	userPassword: string = ""
	constructor(
		private comServ: CommonService,
		private router: Router,
		private authServ: AuthenticationService,
		public alertController: AlertController,
		public platform: Platform,
		private appMinimize: AppMinimize
	) { }

	ngOnInit() {
		setTimeout(() => {
			if (this.authServ.isAuthenticated()) {
				console.log("object")
				this.router.navigate(['/device-details'])
			}
		}, 200);
	}
	// handle submit for login
	handleSubmit(ev: KeyboardEvent): void {
		// ev.preventDefault()
		const user = 'admin'
		const pass = 'admin'
		const username = this.userName.toLowerCase()
		const password = this.userPassword
		this.comServ.showLoading()
		if (username !== '' && username === user && password !== '' && password === pass) {
			setTimeout(() => {
				this.comServ.hideLoading()
				this.authServ.login(username).then(res => {
					// console.log(res)
					this.comServ.showToast("Login Successfull!")
					// navigate to device details
					this.router.navigate(['/device-details'])
				})
			}, 1200);
		} else {
			setTimeout(() => {
				this.comServ.hideLoading()
				this.comServ.showIonicToast({
					message: 'invalid Username or Password',
					duration: 3000,
					role: 'cancel',
					color: 'danger',
					cssClass: "app-ionic-toast"
				}).then((res: any) => {
					res.present()
				})
			}, 1300);
		}

	}

	minimizeApp(ev: MouseEvent) {
		ev.preventDefault()
		this.appMinimize.minimize();
	}

	ngAfterViewInit() {
		// close the app on backbuton press
		this.platform.backButton.subscribe(() => {
			this.comServ.showConfirmBox({
				header: 'Confirm!',
				message: 'Are you sure you want to exit the app',
				buttons: [
					{
						text: 'Cancel',
						role: 'cancel',
						cssClass: 'secondary'
					}, {
						text: 'OK',
						handler: () => {
							// this.comServ.exitApp()
							// this.appMinimize.minimize();
						}
					}
				]
			}).then(confirm => {
				confirm.present()
			})
		})
	}

	ngOnDestroy() {
		this.platform.backButton.unsubscribe()
	}

	// handle login button click  
	// handleLoginClick(ev: any): void {
	// 	ev.preventDefault()
	// }

}
