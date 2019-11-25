import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  constructor() { }

  idProof: string = ""
  sellerPicture: string = ""
  customerAgreement: string = ""
  phoneIMEI: string = ""

  ngOnInit() {
    console.log(this.sellerPicture.length)
  }

}
