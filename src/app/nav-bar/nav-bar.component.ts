import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuth: boolean;
  user: any;
  constructor(
  	private session: SessionService,
  	private router:  Router
  ) { }

  ngOnInit() {
    this.session.isAuth
      .subscribe((isAuth: boolean) => {
      // user will be false if logged out
      // or user object if logged in.
        this.isAuth = isAuth;
        if (this.isAuth) {
            this.user = this.session.user.username
            // this.user = this.session.user._id
        }else{
          this.user= ""
        }

      });
    if (this.session.token) {
      this.isAuth = true;
      this.user = this.session.user.username
    } else {
      this.isAuth = false;
      this.user = "no login"
    }
    if (this.session.user) {
      this.user = this.session.user.username
    } else {
      this.user = "no login"
    }
  }

  logout() {
  	this.session.logout();
  	// this.router.navigate(['/login']);
  }
}
