import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { MyStylesComponent } from './my-styles/my-styles.component';
import { MyBrandsComponent } from './my-brands/my-brands.component';
import { MyPairingsComponent } from './my-pairings/my-pairings.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { SessionService } from './session.service';
import { StyleFinderService } from './style-finder.service';
import { BrandFinderService } from './brand-finder.service';
import { PairingFinderService } from "./pairing-finder.service";
import { StylingService } from "./styling.service";

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddStyleComponent } from './my-styles/add-style/add-style.component';
import { AddBrandComponent } from './my-brands/add-brand/add-brand.component';
import { AddPairingComponent } from './my-pairings/add-pairing/add-pairing.component';
import { StyleDetailsComponent } from './style-details/style-details.component';
import { BrandComponent } from './my-brands/brand/brand.component';
import { PairingComponent } from './my-pairings/pairing/pairing.component'

@NgModule({
  declarations: [
    AppComponent,
    MyStylesComponent,
    MyBrandsComponent,
    MyPairingsComponent,
    SignupComponent,
    LoginComponent,
    NavBarComponent,
    AddStyleComponent,
    AddBrandComponent,
    AddPairingComponent,
    StyleDetailsComponent,
    BrandComponent,
    PairingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SessionService, StyleFinderService, BrandFinderService, PairingFinderService, StylingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
