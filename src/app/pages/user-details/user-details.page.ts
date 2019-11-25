import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/comon/common.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  constructor(
    public comServ: CommonService,
    public fb: FormBuilder
  ) { }

  idProofArray: Array<Object> = [
    {
      text: "D/License",
      value: "license"
    },
    {
      text: "Adhar",
      value: "adhar"
    },
    {
      text: "passport",
      value: "passport"
    },
    {
      text: "Other",
      value: "other"
    },
    {
      text: "Not Available",
      value: "notAvailable"
    }
  ]


  idProof: string = ""
  sellerPicture: string = ""
  customerAgreement: string = ""
  phoneIMEI: string = ""

  // function for takePictureForIdProof
  takePictureForIdProof(ev: KeyboardEvent): void {
    this.comServ.clickImg().then(res => {
      this.idProof = res
    })
  }
  // function for takePictureForSellerPicture
  takePictureForSellerPicture(ev: KeyboardEvent): void {
    this.comServ.clickImg().then(res => {
      this.sellerPicture = res
    })
  }
  // function for takePictureForCustomerAgreement
  takePictureForCustomerAgreement(ev: KeyboardEvent): void {
    this.comServ.clickImg().then(res => {
      this.customerAgreement = res
    })
  }
  // function for takePictureForPhoneIMEI
  takePictureForPhoneIMEI(ev: KeyboardEvent): void {
    this.comServ.clickImg().then(res => {
      this.phoneIMEI = res
    })
  }

  // form validations
  userDetailsForm = this.fb.group({
    name: ["", Validators.required],
    userGender: ["", Validators.required],
    userPhoneNumber: ["", Validators.required],
    address: ["", Validators.required],
    purchasePrice: ["", Validators.required],
    userName: ["", Validators.required],
    idProof: ["", Validators.required],
    assignedTechnicianName: ["", Validators.required]
  })

  ngOnInit() {
    console.log(this.sellerPicture.length)
  }

}
