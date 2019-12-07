import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authServ: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authServ.isAuthenticated()) {
      return this.authServ.isAuthenticated()
    }
    this.router.navigate(['/login'])
  }
}
