import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Volunteer} from './volunter.model';
import {SearchVolunteer} from './searchvolunteer.model';

@Injectable({
    providedIn: 'root'
})
export class VolunterService {
    volunteer: Volunteer;
    searchVolunteer: SearchVolunteer;

    constructor(private http: HttpClient) {
    }

    addVolunteer(volunter: Volunteer) {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer F9bQK456iUpJVZJLTZsMEKhhENqnGJ`);
        return this.http.post('https://coronaviva.herokuapp.com/api/1/coronavirus/volunteer/', volunter, {headers: headers});
    }


    getCountries() {
        return this.http.get('http://www.mocky.io/v2/5e767b012f0000710098609f', {headers: new HttpHeaders()});
    }

    searchVolunteers(searchVolunteer: SearchVolunteer) {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer F9bQK456iUpJVZJLTZsMEKhhENqnGJ`);
        return this.http.get('https://coronaviva.herokuapp.com/api/1/coronavirus/volunteer/' +
            '?country__icontains=' + searchVolunteer.country +
            '&city__icontains=' + searchVolunteer.city +
            '&address__icontains=' +
            '&date__gte=&date__lte=2020-03-02&date=' +
            '&role__icontains=' + searchVolunteer.role,
            {headers: headers});
    }
}

