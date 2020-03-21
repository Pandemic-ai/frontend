import {Component, OnInit} from '@angular/core';
import {VolunterService} from './volunter.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-volunter',
    templateUrl: './volunter.component.html',
    styleUrls: ['./volunter.component.css']
})
export class VolunterComponent implements OnInit {

    constructor(public volunterService: VolunterService) {
    }

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
    }


    onAddVolunteer(form: NgForm) {
        this.volunterService.addVolunteer(form.value).subscribe(res => {
            console.log('Response', res);

        });
    }

    onSearchVolunteer(form: NgForm) {
        this.volunterService.searchVolunteers(form.value).subscribe(res => {
            console.log('Response', res);

        });
    }
}
