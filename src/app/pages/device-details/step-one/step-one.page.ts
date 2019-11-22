import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/comon/common.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-step-one',
	templateUrl: './step-one.page.html',
	styleUrls: ['./step-one.page.scss', '../device-details.page.scss'],
})
export class StepOnePage implements OnInit {
	constructor(private comServ: CommonService, private barcodeScanner: BarcodeScanner, private fb: FormBuilder) { }
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

	mobileImages: Array<string> = []


	// form validations
	stepOneForm = this.fb.group({
		deviceModal: ["", Validators.required],
		deviceColor: ["", Validators.required],
		deviceStorage: ["", Validators.required],
		deviceIMEI: ["", Validators.required],
		deviceHasCharger: ["origional", Validators.required],
		deviceHasEarphone: ["origional", Validators.required],
		deviceHasWarrenty: ["no", Validators.required],
	})
	// stepOneForm = new FormGroup({
	// 	deviceModal: new FormControl(''),
	// 	deviceColor: new FormControl(''),
	// 	deviceStorage: new FormControl(''),
	// 	deviceIMEI: new FormControl(''),
	// 	deviceHasCharger: new FormControl('origional'),
	// 	deviceHasEarphone: new FormControl('origional'),
	// 	deviceHasWarrenty: new FormControl('yes'),
	// });



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
		if (id) {
			this.mobileImages.splice(id, 1)
		}
	}

	scanBarcode(ev: KeyboardEvent) {
		this.barcodeScanner.scan().then(barcodeData => {
			if (barcodeData.cancelled !== true && barcodeData.format !== "QR_CODE") {
				// this.stepOneForm.controls['deviceIMEI'].setValue(barcodeData.text)
				this.stepOneForm.patchValue({
					deviceIMEI: barcodeData.text
				})
			}
			if (barcodeData.cancelled) {
				this.comServ.showToast('Operation canceled')
			}
			if (barcodeData.format === "QR_CODE") {
				this.comServ.showToast('Please select barcode of IMEI no.')
			}
		}).catch(err => {
			console.log('Error', err);
		});
	}

	submitForm(ev: KeyboardEvent): void {
		ev.preventDefault()
	}
	handleSubmit(form: HTMLFormElement) {
		console.log(form)
	}
	ngOnInit() {
	}

}
