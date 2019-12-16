import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from './_services/auth/authentication.service';
import { HistoryService } from './_services/history/history.service';
import { Plugins, StatusBarStyle, Capacitor } from '@capacitor/core';
const { StatusBar } = Plugins;

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	title: string = 'Home'
	private history = [];
	isStatusBarLight = true

	constructor(
		private platform: Platform,
		// private splashScreen: SplashScreen,
		// private statusBar: StatusBar,
		private titleService: Title,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private authServ: AuthenticationService,
		private historyServ: HistoryService
	) {
		this.initializeApp();
		historyServ.loadRoutingHistory()
	}

	// changeStatusBar() {
	// 	StatusBar.setStyle({
	// 		style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
	// 	});
	// 	this.isStatusBarLight = !this.isStatusBarLight;
	// }

	// hideStatusBar() {
	// 	StatusBar.hide();
	// }

	// showStatusBar() {
	// 	StatusBar.show();
	// }

	setDocTitle(title: string) {
		console.log('current title:::::' + this.titleService.getTitle());
		this.titleService.setTitle(title);
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// this.statusBar.styleDefault();
			// this.splashScreen.hide();

			if (Capacitor.isPluginAvailable('StatusBar')) {
				StatusBar.setBackgroundColor({
					color: "#d11920"
				}).then(() => {
					console.log("Done")
				})
			}

			// changing titles dynamically
			const appTitle = this.titleService.getTitle();
			this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
				const child = this.activatedRoute.firstChild;
				if (child.snapshot.data['title']) {
					return child.snapshot.data['title'];
				}
				return appTitle;
			})).subscribe((ttl: string) => {
				this.titleService.setTitle(ttl);
			});

			this.authServ.checkToken().then(() => {
				// console.log(this.authServ.isAuthenticated())
				// console.log(this.authServ.authenticationState.value)
				// if (!this.authServ.authenticationState.value) {
				// 	this.router.navigate(['/login'])
				// }
			})
		});
	}
}
