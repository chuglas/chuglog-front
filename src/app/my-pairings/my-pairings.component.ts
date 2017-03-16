import { Component, OnInit } from '@angular/core';
import { SessionService } from "../session.service";
import { PairingFinderService } from "../pairing-finder.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-pairings',
  templateUrl: './my-pairings.component.html',
  styleUrls: ['./my-pairings.component.css']
})
export class MyPairingsComponent implements OnInit {

  pairings;

  public addActive = false;

  constructor(
    private session: SessionService,
    private pairingFinder: PairingFinderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refreshPairings();
  }

  showAdd(): void {
   this.addActive = true;
  }

  hideAdd() : void {
    this.addActive = false;
  }

  refreshPairings() {
    this.route.params.subscribe(params => {
      this.pairingFinder.getPairings(params['id'])
        .subscribe((pairings) => {
          pairings.sort(function(a, b) {
            return parseFloat(b.rating) - parseFloat(a.rating);
          });
          this.pairings = pairings;
        });
    });
  }

  addPairing(pairing) {
    this.route.params.subscribe(params => {
      this.pairingFinder.add(params['id'], pairing)
      .subscribe(() => {
        this.refreshPairings();
        console.log('updated!')
      });
    });

  }

  deletePairing(pairingId) {
    console.log('getting hereeee purr?: ', pairingId)
    this.pairingFinder.remove(pairingId)
    .subscribe(() => {
      this.refreshPairings();
      console.log('delete!')
      // this.brandFinder.getBrands(params['id']);
      // this.router.navigate([`/mystyles/${params['id']}`]);
    });
  }


}
