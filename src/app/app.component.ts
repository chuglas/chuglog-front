import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { StylingService } from './styling.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  user: any;

  constructor(
    private session: SessionService,
    public styling: StylingService,
  ) { }

  ngOnInit() {

  }

  // expandInfo() {
  //   this.expandedInfo = this.styling.expanded;
  //   console.log("and in herree?: ", this.expandedInfo)
  // }

  minInfo() {
    // this.expandedInfo = this.styling.minInfo;
  }

}


// 'expanded-info': expandedInfo, 'not-expanded-info': !expandedInfo
