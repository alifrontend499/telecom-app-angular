import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { AlertController } from '@ionic/angular'
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../../pages/image-modal/image-modal.page';

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	constructor(
		public loadingController: LoadingController,
		public toastController: ToastController,
		public alertController: AlertController,
		private modalController: ModalController
	) {
		defineCustomElements(window)
	}

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

	// click image
	clickImg(quality: number = 90, allowEditing: boolean = false): Promise<string> {
		return (async () => {
			const { Camera } = Plugins;
			const image = await Camera.getPhoto({
				quality: quality,
				allowEditing: allowEditing,
				resultType: CameraResultType.Uri,
				source: CameraSource.Camera
			});
			var newImageUrlOrg: string = image.webPath;
			return newImageUrlOrg
		})()
	}

	// show confirm Box
	async showConfirmBox(data: Object): Promise<HTMLIonAlertElement> {
		const alert = await this.alertController.create(data);
		return alert
	}

	// exit app
	exitApp(): void {
		navigator['app'].exitApp()
	}

	// open modal
	async openModal(data: any): Promise<any> {
		const modal = await this.modalController.create(data)
		return modal
	}
	// close modal
	closeModal() {
		this.modalController.dismiss({
			'dismissed': true
		})
	}
}
