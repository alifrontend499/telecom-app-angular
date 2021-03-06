import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonService } from './_services/comon/common.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ImageModalPageModule } from './pages/image-modal/image-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, IonicStorageModule.forRoot(), ImageModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    AppMinimize,
    Title,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CommonService,
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
