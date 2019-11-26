import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-otp',
	templateUrl: './otp.page.html',
	styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

	constructor(
		private router: Router
	) { }

	mobileIcon: string = "assets/images/icons/icon-otp-mobile.png"

	// submit form
	handleSubmit(ev: any) {
		ev.preventDefault()
		this.router.navigate(['/otp/otp-verification'])
	}
	ngOnInit() {
	}

}
