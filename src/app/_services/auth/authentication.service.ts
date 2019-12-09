import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token'

@Injectable({
	providedIn: 'root'
})


export class AuthenticationService {
	authenticationState = new BehaviorSubject(false)
	hasLoggedIn = 'hasLoggedIn'
	constructor(private storage: Storage, private plt: Platform) { }

	login(userName: string) {
		if (userName) {
			return this.storage.set(TOKEN_KEY, `Bearer:${userName}`).then(res => {
				this.authenticationState.next(true)
				this.storage.set(this.hasLoggedIn, true)
			})
		}
	}
	logout() {
		return this.storage.remove(TOKEN_KEY).then(res => {
			this.authenticationState.next(false)
			this.storage.remove(this.hasLoggedIn)
		})
	}
	isAuthenticated() {
		return this.authenticationState.value
	}
	hasLoggedInFunc() {
		return this.storage.get(this.hasLoggedIn)
	}
	async checkToken() {
		const res = await this.storage.get(TOKEN_KEY);
		if (res) {
			this.authenticationState.next(true);
		}
	}

}
