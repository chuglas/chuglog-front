import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StyleFinderService {
  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = 'https://chuglog.herokuapp.com/';


  constructor(
    private http: Http,
    private SessionService: SessionService
  ) {}

  getApiStyles() {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    console.log('serv return: ', this.http.get(`${this.BASE_URL}/api/styles/api-styles`, options).map((res) => res.json()))
    return this.http.get(`${this.BASE_URL}/api/styles/api-styles`, options)
      .map((res) => res.json())
      // .catch(this.handleError)
  }

  getStyles() {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/styles`, options)
      .map((res) => res.json());
  }

  get(id) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/api/styles/style/${id}`, options)
      .map((res) => res.json());
  }

  add(style) {
    console.log("style object passed in service: ", style);
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/api/styles/`, style, options)
      .map((res) => res.json());
      // .toPromise()
      // .then((res) => res.json())
      // .catch((err) => console.log(err));
  }
}
