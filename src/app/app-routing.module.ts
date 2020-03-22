import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VolunterComponent} from './volunter/volunter.component';
import {HelpseekerComponent} from './helpseeker/helpseeker.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'volunteer', component: VolunterComponent },
  { path: 'help-seeker', component: HelpseekerComponent },
  { path: '', component: VolunterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
