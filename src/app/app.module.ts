import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomTranslatePipe } from './shared/pipes/custom-translate.pipe';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AlertPopup } from './shared/services/alert-popup';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [
    InAppBrowser,
    ImagePicker,
    NavParams,
    StatusBar,
    NativeGeocoder,
    AlertPopup,
    AuthenticationService,
    AuthGuardService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
