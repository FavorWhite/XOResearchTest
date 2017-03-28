import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../Entities/user';
import { Group } from '../Entities/group';
import { UserService } from '../user.service';
import { GroupService } from '../group.service';

@Component({
    selector: 'my-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
    users: User[];
    group=new Group();
    groups: Group[];
    groupCount:number;
    selectedGroups: Group[] = [];
    groupForEdit=new Group();

    constructor(private userService: UserService, private groupService: GroupService) {
    }

    getNewId() {
        return new Date().getTime();
    };
    clearGroup() {
        this.group = new Group();
    };
    getGroupForEdit() {
        this.groupForEdit = JSON.parse(JSON.stringify(this.selectedGroups[0]));
    }
    addGroup(group: Group) {
        group.id = this.getNewId();
        group.users = [];
        this.groups.push(group);
        this.groupCount = this.groups.length;
    };

    editGroup(): void {

        var index = this.groups.findIndex(group => group.id == this.groupForEdit.id);
        this.groups[index] = this.groupForEdit;
        this.selectedGroups[0] = this.groups[index];
    }
    delGroup(): void {//TODO Удаление юзеров с группой вместе
        this.selectedGroups.forEach(el => {
            this.groups = this.groups.filter(grp => grp.id !== el.id);
            this.users = this.users.filter(usr => usr.group !== el.name);
        });
        this.selectedGroups = [];
    }


    onChecked(group: Group) {
        this.selectedGroups.push(group);
    }
    onEmptyCheck(group: Group) {
        this.selectedGroups = this.selectedGroups.filter(g => g.id !== group.id);
    }
    isSelected(group: Group): boolean {
        return this.selectedGroups.includes(group);
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

    //onSelect(group: Group): void {
    //    this.selectedGroup = group;
    //    this.selectedGroupUsers = this.selectedGroup.users;
    //}

  
}