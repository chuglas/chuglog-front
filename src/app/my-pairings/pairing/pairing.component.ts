import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from "../../session.service";
import { PairingFinderService } from "../../pairing-finder.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {

  @Input() pairing: any;
  @Output() deleteExport = new EventEmitter<string>();

  public editActive = false;

  constructor(
    private session: SessionService,
    private pairingFinder: PairingFinderService,
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
      this.pairingFinder.edit(params['id'], this.pairing);
      this.hideEdit();
    });
  }

  deletePairingButton() {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      this.deleteExport.emit(this.pairing._id);
    }
  }

}
