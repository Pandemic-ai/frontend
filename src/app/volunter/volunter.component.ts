import {Component, OnInit} from '@angular/core';
import {VolunterService} from './volunter.service';
import {NgForm} from '@angular/forms';
import {Volunteer} from './volunter.model';

@Component({
    selector: 'app-volunter',
    templateUrl: './volunter.component.html',
    styleUrls: ['./volunter.component.css']
})
export class VolunterComponent implements OnInit {

    constructor(public volunterService: VolunterService) {
    }

    searchVolunteerData: any[] = [];

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        this.volunterService.volunteer = {
            name: '',
            country: '',
            city: '',
            address: '',
            info: '',
            role: '',
            date: null
        };

        this.volunterService.searchVolunteer = {
            country: '',
            city: '',
            address: '',
            role: '',
            date: null
        };
    }


    onAddVolunteer(form: NgForm) {
        this.volunterService.addVolunteer(form.value).subscribe(res => {
            console.log('Response', res);

        });
    }

    onSearchVolunteer(form: NgForm) {
        // @ts-ignore
        this.volunterService.searchVolunteers(form.value).subscribe(
            data => {
                // @ts-ignore
                this.searchVolunteerData = data;
            },
            err => console.error(err),
            () => console.log('Error')
        );
    }
}
