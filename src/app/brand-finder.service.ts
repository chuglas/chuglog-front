import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BrandFinderService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = 'https://chuglog.herokuapp.com';

  constructor(
    private http: Http,
    private SessionService: SessionService
  ) {}

  getBrands(styleId) {
    console.log("TOKEN: ", this.SessionService.token)
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/styles/style/${styleId}/brand`, options)
      .map((res) => res.json());
  }

  add(styleId, brand) {
    console.log("brand object passed in service: ", brand);
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/api/styles/style/${styleId}/brand`, brand, options)
      // .toPromise()
      // .then((res) => res.json())
      .map((res) => res.json())
      // .catch((err) => console.log(err))
  }

  edit(styleId, brand) {
    console.log("in servicio: ", brand._id + "|" + styleId)
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.BASE_URL}/api/styles/style/${styleId}/brand/${brand._id}`, brand, options )
      // .map((res) => res.json());
      .toPromise()
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  remove(brandId) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    console.log('in BF service:', brandId);
    return this.http.delete(`${this.BASE_URL}/api/styles/style/styleId/brand/${brandId}`, options)
      .map((res) => res.json());
  }

}
