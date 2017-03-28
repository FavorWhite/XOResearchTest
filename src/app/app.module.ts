import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './AppComponent/app.component';
import { ContactsComponent }    from './ContactsComponent/contacts.component';
import { ClockComponent }       from './ClockComponent/clock.component';
import { GroupsComponent }      from './GroupsComponent/groups.component';

import { UserService }          from './user.service';
import { GroupService }          from './group.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule(({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ContactsComponent,
        ClockComponent,
        GroupsComponent,
    ],
    providers: [UserService, GroupService],
    bootstrap: [AppComponent]
}) as any)
export class AppModule { }
