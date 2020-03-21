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
        return this.http.post('https://coronaviva.herokuapp.com', volunter, {headers: headers});
    }


    searchVolunteers(searchVolunteer: SearchVolunteer) {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer F9bQK456iUpJVZJLTZsMEKhhENqnGJ`);
        return this.http.get('https://coronaviva.herokuapp.com/api/1/coronavirus/volunteer/?country__icontains=&city__icontains=&address__icontains=&date__gte=&date__lte=2020-03-02&role__icontains=', {headers: headers});

        // return this.http.get('https://coronaviva.herokuapp.com/api/1/coronavirus/volunteer/' +
        //     '?country__icontains=' + searchVolunteer.country +
        //     '&city__icontains=' + searchVolunteer.city +
        //     '&address__icontains=' +
        //     '&date__gte=&date__lte=2020-03-02&date=' + searchVolunteer.date +
        //     '&role__icontains=' + searchVolunteer.role,
        //     {headers: headers});
    }
}

