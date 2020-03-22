import { Component, OnInit } from '@angular/core';
import {VolunterService} from '../volunter/volunter.service';
import {NgForm} from '@angular/forms';
import {HelpseekerService} from './helpseeker.service';

@Component({
  selector: 'app-helpseeker',
  templateUrl: './helpseeker.component.html',
  styleUrls: ['./helpseeker.component.css']
})
export class HelpseekerComponent implements OnInit {

  countriesList: any[] = [];
  citiesList = [];

  constructor(public helpseekerService: HelpseekerService) {
  }

  searchHelpSekeerData: any = [];

  ngOnInit() {
    this.resetForm();
    this.getAllCountries();
  }

  resetForm(form?: NgForm) {
    this.helpseekerService.helpSeeker = {
      name: '',
      country: '',
      city: '',
      address: '',
      info: '',
      role: '',
      date: null
    };

    this.helpseekerService.searchHelpSeeker = {
      country: '',
      city: '',
      address: '',
      role: '',
      date: null
    };
  }


  onAddHelpSeeker(form: NgForm) {
    this.helpseekerService.addVolunteer(form.value).subscribe(res => {
      console.log('Response', res);

    });
  }


  getAllCountries() {
    this.helpseekerService.getCountries().subscribe(res => {
      // if(res.hasOwnProperty("countries")) {
      this.countriesList = res['countries'];
      for (const countries of res['countries']) {
        for (const city of countries['states']) {
          this.citiesList.push(city);
        }
      }
    });
  }


  onSearchHelpSekeer(form: NgForm) {
    // @ts-ignore
    this.helpseekerService.searchVolunteers(form.value).subscribe(
        data => {
          // @ts-ignore
          this.searchHelpSekeerData = data;
        },
        err => console.error(err),
        () => console.log('Error')
    );
  }
}
