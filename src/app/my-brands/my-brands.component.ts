import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import { BrandFinderService } from "../brand-finder.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-my-brands',
  templateUrl: './my-brands.component.html',
  styleUrls: ['./my-brands.component.css'],
  providers: []
})
export class MyBrandsComponent implements OnInit {

  brands;

  public addActive = false;

  constructor(
    private session: SessionService,
    private brandFinder: BrandFinderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refreshBrands();
  }

  showAdd(): void {
   this.addActive = true;
  }

  hideAdd() : void {
    console.log('is this closing?')
    this.addActive = false;
  }

  refreshBrands() {
    this.route.params.subscribe(params => {
      this.brandFinder.getBrands(params['id'])
        .subscribe((brands) => {
          brands.sort(function(a, b) {
            return parseFloat(b.rating) - parseFloat(a.rating);
          });
          this.brands = brands;
        });
    });
  }

  addBrand(brand) {
    console.log('bradndy: ', brand)
    this.route.params.subscribe(params => {
      this.brandFinder.add(params['id'], brand)
      .subscribe(() => {
        this.refreshBrands();
        console.log('updated!')
      });
    });

  }

  deleteBrand(brandId) {
    console.log('getting hereeee?: ', brandId)
    this.brandFinder.remove(brandId)
    .subscribe(() => {
      this.refreshBrands();
      console.log('delete!')
      // this.brandFinder.getBrands(params['id']);
      // this.router.navigate([`/mystyles/${params['id']}`]);
    });
  }

}
