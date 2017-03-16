import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from "../../session.service";
import { PairingFinderService } from "../../pairing-finder.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pairing',
  templateUrl: './add-pairing.component.html',
  styleUrls: ['./add-pairing.component.css']
})
export class AddPairingComponent implements OnInit {

  @Output() closeAdd = new EventEmitter<Object>();
  @Output() addExport = new EventEmitter<Object>();

  constructor(
    private session: SessionService,
    private pairingFinder: PairingFinderService,
    private router: Router,
    private route: ActivatedRoute
   ) { }

  newPairing = {
    name: '',
    recipeLink: '',
    tastingNotes: '',
    rating: ''
  }

  ngOnInit() {

  }

  submit() {
    console.log("add pairing: ", this.newPairing);
    this.addExport.emit(this.newPairing);
    this.route.params.subscribe(params => {
      this.pairingFinder.add(params['id'], this.newPairing);
    });
    this.newPairing = {
      name: '',
      recipeLink: '',
      tastingNotes: '',
      rating: ''
    }
    this.closeAdd.emit(false);
  }


}
