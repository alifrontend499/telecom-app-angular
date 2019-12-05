import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
	selector: 'app-added-successfully',
	templateUrl: './added-successfully.page.html',
	styleUrls: ['./added-successfully.page.scss'],
})
export class AddedSuccessfullyPage implements OnInit {

	constructor(private router: Router) { }

	ngOnInit() {
	}

	goToStepOne(ev: KeyboardEvent) {
		ev.preventDefault()
		this.router.navigate(['device-details/step-one'])
	}

}
