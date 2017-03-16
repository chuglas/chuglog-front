import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyStylesComponent } from './my-styles/my-styles.component';
import { MyBrandsComponent } from './my-brands/my-brands.component';
import { MyPairingsComponent } from './my-pairings/my-pairings.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { SessionService } from './session.service';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    // { path: 'mypairings', component: MyPairingsComponent, canActivate: [SessionService] },
    // { path: 'mybrands', component: MyBrandsComponent, canActivate: [SessionService] },
    { path: 'mystyles', component: MyStylesComponent, canActivate: [SessionService] },
    { path: 'mystyles/:id', component: MyStylesComponent, canActivate: [SessionService] },
    { path: '**', redirectTo: '' }
];
