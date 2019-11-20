import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor(
		public loadingController: LoadingController,
		public toastController: ToastController
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

	// device default toast
	showToast(text: string = '', duration: any = 'short') {
		(async () => {
			const { Toast } = Plugins;
			await Toast.show({
				duration: duration,
				text: text
			});
		})()
	}

	// ionic toast
	showIonicToast(data: Object): Promise<HTMLIonToastElement> {
		return this.toastController.create(data)
	}
}
