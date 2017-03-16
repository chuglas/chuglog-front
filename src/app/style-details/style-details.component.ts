import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from "../session.service";
import { StyleFinderService } from "../style-finder.service";
import { StylingService } from "../styling.service";


@Component({
  selector: 'app-style-details',
  templateUrl: './style-details.component.html',
  styleUrls: ['./style-details.component.css']
})
export class StyleDetailsComponent implements OnInit {

  style;

  constructor(
    private session: SessionService,
    private styleFinder: StyleFinderService,
    private styling: StylingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBeerDetails(params['id']);
    });
  }

  getBeerDetails(id) {
    this.styleFinder.get(id)
      .subscribe((style) => {
        this.style = style;
      });
  }

  expandDetails() {
    this.styling.expandedInfo();
  }


};
