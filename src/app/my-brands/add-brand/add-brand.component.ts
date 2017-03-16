import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from "../../session.service";
import { BrandFinderService } from "../../brand-finder.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  @Output() closeAdd = new EventEmitter<Object>();
  @Output() addExport = new EventEmitter<Object>();

  constructor(
    private session: SessionService,
    private brandFinder: BrandFinderService,
    private router: Router,
    private route: ActivatedRoute
   ) { }

  newBrand = {
    name: '',
    breweryName: '',
    tastingNotes: '',
    rating: ''
  }

  ngOnInit() {

  }

  submit() {
    console.log("add brand: ", this.newBrand);
    this.addExport.emit(this.newBrand);
    this.newBrand = {
      name: '',
      breweryName: '',
      tastingNotes: '',
      rating: ''
    }
    this.closeAdd.emit(false);

  }

}
