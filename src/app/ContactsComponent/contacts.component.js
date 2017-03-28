"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_1 = require('../Entities/user');
var user_service_1 = require('../user.service');
var group_service_1 = require('../group.service');
var ContactsComponent = (function () {
    function ContactsComponent(userService, groupService) {
        this.userService = userService;
        this.groupService = groupService;
        this.user = new user_1.User();
        this.selectedUsers = [];
        this.usersCount = 0;
        this.userForEdit = new user_1.User();
    }
    ContactsComponent.prototype.getNewId = function () {
        return new Date().getTime();
    };
    ;
    ContactsComponent.prototype.clearUser = function () {
        this.user = new user_1.User();
    };
    ;
    ContactsComponent.prototype.getUserForEdit = function () {
        this.userForEdit = JSON.parse(JSON.stringify(this.selectedUsers[0]));
    };
    ContactsComponent.prototype.addUser = function (user) {
        user.id = this.getNewId();
        this.users.push(user);
        this.usersCount = this.users.length;
    };
    ;
    ContactsComponent.prototype.editUser = function () {
        var _this = this;
        var index = this.users.findIndex(function (user) { return user.id == _this.userForEdit.id; });
        this.users[index] = this.userForEdit;
        this.selectedUsers[0] = this.users[index];
    };
    ContactsComponent.prototype.delUser = function () {
        var _this = this;
        this.selectedUsers.forEach(function (el) {
            _this.users = _this.users.filter(function (usr) { return usr.id !== el.id; });
        });
        this.selectedUsers = [];
    };
    ContactsComponent.prototype.onChecked = function (user) {
        this.selectedUsers.push(user);
    };
    ContactsComponent.prototype.onEmptyCheck = function (user) {
        this.selectedUsers = this.selectedUsers.filter(function (u) { return u.id !== user.id; });
    };
    ContactsComponent.prototype.isSelected = function (user) {
        return this.selectedUsers.includes(user);
    };
    ContactsComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    ContactsComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupService.getGroups().then(function (groups) { return _this.groups = groups; });
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.getGroups();
        this.getUsers();
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'my-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, group_service_1.GroupService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map