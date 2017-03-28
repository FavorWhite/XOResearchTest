

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContactsComponent }    from './ContactsComponent/contacts.component';
import { ClockComponent }       from './ClockComponent/clock.component';
import { GroupsComponent }      from './GroupsComponent/groups.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
