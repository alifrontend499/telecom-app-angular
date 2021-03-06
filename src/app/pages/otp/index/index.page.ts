import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-index',
	templateUrl: './index.page.html',
	styleUrls: ['./index.page.scss', '../otp.page.scss'],
})
export class IndexPage implements OnInit {

	constructor(
		private router: Router,
		private storage: Storage
	) { }

	mobileNoVal: number
	@ViewChild("otpForm", { static: false }) otpForm: NgForm
	mobileIcon: string = "assets/images/icons/icon-otp-mobile.png"

	// submit form
	handleSubmit(ev: any) {
		// console.time("storagetime")
		this.storage.set('otpMobileNumber', this.mobileNoVal).then(res => {
			if (this.otpForm.valid) {
				this.router.navigate(['otp/otp-verification'])
			} else {
				ev.preventDefault()
			}
		})
	}

	ngOnInit() {
	}

}
