import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss', '../otp.page.scss'],
})
export class OtpVerificationPage implements OnInit {

  constructor() { }
  mobileIcon: string = "assets/images/icons/icon-otp-mobile.png"
  userPhone: number = 8427145040

  ngOnInit() {
  }

}
