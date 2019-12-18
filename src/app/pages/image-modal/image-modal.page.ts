import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { CommonService } from 'src/app/_services/comon/common.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  newImg: string
  constructor(navParams: NavParams, private comServ: CommonService) {
    console.log(navParams.get('img'))
    this.newImg = navParams.get('img')
  }


  closeModal(ev: MouseEvent) {
    ev.preventDefault()
    console.log(ev)
    this.comServ.closeModal()
  }

  ngOnInit() {
  }

}
