import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { CommonService } from 'src/app/_services/comon/common.service';

@Component({
	selector: 'app-image-modal',
	templateUrl: './image-modal.page.html',
	styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

	newImg: any
	navPram: any

	zoomOpts = {
		zoom: {
			maxRatio: 4
		}
	}

	constructor(navParams: NavParams, private comServ: CommonService) {
		console.log(navParams.get('img'))
		this.navPram = navParams.get('img')
	}

	ionViewWillEnter() {
		this.ngOnInit()
		this.newImg = this.navPram
	}

	closeModal(ev: MouseEvent): void {
		ev.preventDefault()
		console.log(ev)
		this.comServ.closeModal()
	}

	ngOnInit() {
	}

}
