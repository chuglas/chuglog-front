import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from "../../session.service";
import { StyleFinderService } from "../../style-finder.service";

@Component({
  selector: 'app-add-style',
  templateUrl: './add-style.component.html',
  styleUrls: ['./add-style.component.css']
})
export class AddStyleComponent implements OnInit {

  @Output() addStyleOutput = new EventEmitter<Object>();

  apiStyles;
  isAuth: boolean;
  userId: number;
  constructor( private session: SessionService, private styleFinder: StyleFinderService ) { }

  ngOnInit() {
    this.grabApi()
  }

  grabApi() {
    this.styleFinder.getApiStyles()
      .subscribe((styleList) => {
        var lista = JSON.parse(styleList);
        this.apiStyles = lista.data;
      })
  }

  newStyle;

  addStyle = {
    name: '',
    apiId: '',
    description: '',
    color: '',
    colorNum: 2
  };

  submit() {

    this.addStyle.name = this.newStyle.name;
    this.addStyle.description = this.newStyle.description;
    this.addStyle.color = "color" + this.newStyle.srmMin;
    this.addStyle.colorNum = Number(this.newStyle.srmMin);
    this.addStyle.apiId = String(this.newStyle.id);
    // this.styleFinder.add(this.addStyle);
    this.addStyleOutput.emit(this.addStyle);
    this.showMyStyles();
  }

  showMyStyles() {

  }

  addActive: boolean = false;

  showAdd() {
    this.addActive = true;
  }

  hideAdd() {
    this.addActive = false;
  }

}
