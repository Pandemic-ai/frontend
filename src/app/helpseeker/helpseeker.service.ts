import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Volunteer} from '../volunter/volunter.model';

@Injectable({
  providedIn: 'root'
})
export class HelpseekerService {

  constructor(private http: HttpClient) {
  }


  getCountries(){
    return this.http.get('http://www.mocky.io/v2/5e767b012f0000710098609f', {headers: new HttpHeaders()});
  }
}
