import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/comon/common.service';

@Component({
	selector: 'app-step-one',
	templateUrl: './step-one.page.html',
	styleUrls: ['./step-one.page.scss', '../device-details.page.scss'],
})
export class StepOnePage implements OnInit {
	constructor(private comServ: CommonService) { }
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
		"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	]



	imgLoaded(): void {
		this.comServ.showToast("Image added successfully")
	}


	ngOnInit() {
	}

}
