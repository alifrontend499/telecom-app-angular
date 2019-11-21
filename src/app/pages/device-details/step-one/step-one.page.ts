import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/comon/common.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
	selector: 'app-step-one',
	templateUrl: './step-one.page.html',
	styleUrls: ['./step-one.page.scss', '../device-details.page.scss'],
})
export class StepOnePage implements OnInit {
	constructor(private comServ: CommonService, private barcodeScanner: BarcodeScanner) { }
	// device modal
	deviceModal: Array<Object> = [
		{ name: 'iphone' },
		{ name: 'samsung' },
		{ name: 'mi' },
		{ name: 'nokia' }
	]
	// device modal
	deviceColor: Array<Object> = [
		{ name: 'black' },
		{ name: 'red' },
		{ name: 'white' },
		{ name: 'gray' }
	]
	// device modal
	deviceStorage: Array<Object> = [
		{ name: '32' },
		{ name: '64' },
		{ name: '128' },
		{ name: '256' }
	]

	mobileImages: Array<string> = [
		"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS0Ple5hMLlfZyJx3YJiN3q-QFQ4lfcdEoMj7ps2c0XbTZnbdt",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsUCeTtykhzsGrODsXn_T0yzDtyo7LdPogCAl6QCPnZvKOgiOk"
	]



	// message after image loaded
	imgLoaded(): void {
		this.comServ.showToast("Image added successfully")
	}

	// opening camera clicking image
	clickImage(): void {
		this.comServ.clickImg().then(res => {
			this.mobileImages.push(res)
		})
	}

	// delete image
	deleteImg(id: number): void {
		this.mobileImages.splice(id, 1)
	}

	barcodeVal: string = ''
	newBarcode: any;
	scanBarcode(ev: KeyboardEvent) {
		this.barcodeScanner.scan().then(barcodeData => {
			this.newBarcode = barcodeData
			if (barcodeData.cancelled !== false) {
				this.barcodeVal = barcodeData.text
			}
			if (barcodeData.cancelled) {
				this.comServ.showToast('Operation canceled')
			}
		}).catch(err => {
			console.log('Error', err);
		});
	}
	ngOnInit() {
	}

}
