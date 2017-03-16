import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from "../../session.service";
import { BrandFinderService } from "../../brand-finder.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  @Input() brand: any;
  @Output() deleteExport = new EventEmitter<string>();


  public editActive = false;

  constructor(
    private session: SessionService,
    private brandFinder: BrandFinderService,
    private router: Router,
    private route: ActivatedRoute
   ) { }
  ngOnInit() {
  }

  showEdit(): void {
   this.editActive = true;
  }

  hideEdit() : void {
    this.editActive = false;
  }

  update() {
    this.route.params.subscribe(params => {
      this.brandFinder.edit(params['id'], this.brand);
      this.hideEdit();
    });
  }

  deleteBrandButton() {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      this.deleteExport.emit(this.brand._id);
    }
  }
}
