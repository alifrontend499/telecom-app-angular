import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss', '../added-successfully.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStepOne(ev: KeyboardEvent) {
    ev.preventDefault()
    this.router.navigate(['device-details/step-one'])
  }

}
