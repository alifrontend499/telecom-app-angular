import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

    constructor(
        private authServ: AuthenticationService,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (this.authServ.isAuthenticated()) {
            console.log(this.authServ.isAuthenticated())
            return true
        } else {
            this.router.navigate(['/device-details'])
            return false
        }
    }
}
