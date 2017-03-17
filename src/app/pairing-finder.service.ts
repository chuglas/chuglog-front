import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PairingFinderService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = 'https://chuglog.herokuapp.com';


  constructor(
    private http: Http,
    private SessionService: SessionService
  ) {}

  getPairings(styleId) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/styles/style/${styleId}/pairing`, options)
      .map((res) => res.json());
  }

  add(styleId, pairing) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/api/styles/style/${styleId}/pairing`, pairing, options)
      .map((res) => res.json())
      // .toPromise()
      // .then((res) => res.json())
      // .catch((err) => console.log(err))
      // .map((res) => res.json())

  }

  edit(styleId, pairing) {
    console.log("in servicio: ", pairing._id + "|" + styleId)
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.BASE_URL}/api/styles/style/${styleId}/pairing/${pairing._id}`, pairing, options )
      // .map((res) => res.json());
      .toPromise()
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  remove(pairingId) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    console.log('in BF service:', pairingId);
    return this.http.delete(`${this.BASE_URL}/api/styles/style/styleId/pairing/${pairingId}`, options)
      .map((res) => res.json());
  }

}
