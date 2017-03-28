import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {User } from '../Entities/user';
import { Group } from '../Entities/group';
import { UserService } from '../user.service';
import { GroupService } from '../group.service';

@Component({
    selector: 'my-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    users: User[];
    user: User = new User();
    selectedUsers: User[] = [];
    groups: Group[];
    usersCount = 0;
    userForEdit: User = new User();


    

    constructor(private userService: UserService, private groupService: GroupService) {

    }
    getNewId() {
        return new Date().getTime();
    };
    clearUser() {
        this.user = new User();
    };
    getUserForEdit() {
        this.userForEdit = JSON.parse(JSON.stringify(this.selectedUsers[0]));
    }
    addUser(user: User) {
        user.id = this.getNewId();
        this.users.push(user);
        this.usersCount = this.users.length;
    };

    editUser(): void {

        var index = this.users.findIndex(user => user.id == this.userForEdit.id);
        this.users[index] = this.userForEdit;
        this.selectedUsers[0] = this.users[index];
    }
    delUser(): void {
        this.selectedUsers.forEach(el => {
            this.users = this.users.filter(usr => usr.id !== el.id);

        });
        this.selectedUsers = [];
    }



    onChecked(user:User) {
        this.selectedUsers.push(user);
    }
    onEmptyCheck(user: User) {
        this.selectedUsers=this.selectedUsers.filter(u=>u.id!==user.id);
    }
    isSelected(user:User): boolean {
        return this.selectedUsers.includes(user);
    }


    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    getGroups(): void {
        this.groupService.getGroups().then(groups => this.groups = groups);
    }


    ngOnInit(): void {
        this.getGroups();
        this.getUsers();
    }
}
