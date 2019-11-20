import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor(
		public loadingController: LoadingController
	) { }

	// show loading
	showLoading() {
		this.loadingController.create({
			spinner: "circles",
			cssClass: 'app-loading'
		}).then(res => {
			res.present()
		})
	}

	// hide loading
	hideLoading() {
		this.loadingController.dismiss()
	}
}
