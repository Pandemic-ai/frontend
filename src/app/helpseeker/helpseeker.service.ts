import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SearchVolunteer} from '../volunter/searchvolunteer.model';
import {HelpSeeker} from './helpseeker.model';
import {SearchHelpSeeker} from './searchhelpseeker.model';

@Injectable({
  providedIn: 'root'
})
export class HelpseekerService {

  helpSeeker: HelpSeeker;
  searchHelpSeeker: SearchHelpSeeker;

  constructor(private http: HttpClient) {
  }

  addVolunteer(helpseeker: HelpSeeker) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer F9bQK456iUpJVZJLTZsMEKhhENqnGJ`);
    return this.http.post('https://coronaviva.herokuapp.com/api/1/coronavirus/report/', helpseeker, {headers: headers});
  }


  getCountries() {
    return this.http.get('http://www.mocky.io/v2/5e767b012f0000710098609f', {headers: new HttpHeaders()});
  }

  searchVolunteers(searchHelpSeeker: SearchHelpSeeker) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer F9bQK456iUpJVZJLTZsMEKhhENqnGJ`);
    return this.http.get('https://coronaviva.herokuapp.com/api/1/coronavirus/report/' +
        '?country__icontains=' + searchHelpSeeker.country +
        '&city__icontains=' + searchHelpSeeker.city +
        '&address__icontains=' +
        '&date__gte=&date__lte=2020-03-02&date=' + searchHelpSeeker.date +
        '&role__icontains=' + searchHelpSeeker.role,
        {headers: headers});
  }
}
