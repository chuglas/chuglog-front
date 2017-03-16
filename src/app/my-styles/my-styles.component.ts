import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from "../session.service";
import { StyleFinderService } from "../style-finder.service";

@Component({
  selector: 'app-my-styles',
  templateUrl: './my-styles.component.html',
  styleUrls: ['./my-styles.component.css']
})
export class MyStylesComponent implements OnInit {

  styles;

  constructor( private session: SessionService, private styleFinder: StyleFinderService ) { }

  ngOnInit() {
    this.showMyStyles();
  }

  showMyStyles() {
    this.styleFinder.getStyles()
      .subscribe((styles) => {
        console.log("in here on save?")
        styles.sort(function(a, b) {
          return parseFloat(b.colorNum) - parseFloat(a.colorNum);
        });
        this.styles = styles;
      });
  }

  add(style) {
    this.styleFinder.add(style)
      .subscribe(() => {
        this.showMyStyles();
        console.log('styles updated!')
      });
  }
}
