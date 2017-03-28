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
var group_1 = require('../Entities/group');
var user_service_1 = require('../user.service');
var group_service_1 = require('../group.service');
var GroupsComponent = (function () {
    function GroupsComponent(userService, groupService) {
        this.userService = userService;
        this.groupService = groupService;
        this.group = new group_1.Group();
        this.selectedGroups = [];
        this.groupForEdit = new group_1.Group();
    }
    GroupsComponent.prototype.getNewId = function () {
        return new Date().getTime();
    };
    ;
    GroupsComponent.prototype.clearGroup = function () {
        this.group = new group_1.Group();
    };
    ;
    GroupsComponent.prototype.getGroupForEdit = function () {
        this.groupForEdit = JSON.parse(JSON.stringify(this.selectedGroups[0]));
    };
    GroupsComponent.prototype.addGroup = function (group) {
        group.id = this.getNewId();
        group.users = [];
        this.groups.push(group);
        this.groupCount = this.groups.length;
    };
    ;
    GroupsComponent.prototype.editGroup = function () {
        var _this = this;
        var index = this.groups.findIndex(function (group) { return group.id == _this.groupForEdit.id; });
        this.groups[index] = this.groupForEdit;
        this.selectedGroups[0] = this.groups[index];
    };
    GroupsComponent.prototype.delGroup = function () {
        var _this = this;
        this.selectedGroups.forEach(function (el) {
            _this.groups = _this.groups.filter(function (grp) { return grp.id !== el.id; });
            _this.users = _this.users.filter(function (usr) { return usr.group !== el.name; });
        });
        this.selectedGroups = [];
    };
    GroupsComponent.prototype.onChecked = function (group) {
        this.selectedGroups.push(group);
    };
    GroupsComponent.prototype.onEmptyCheck = function (group) {
        this.selectedGroups = this.selectedGroups.filter(function (g) { return g.id !== group.id; });
    };
    GroupsComponent.prototype.isSelected = function (group) {
        return this.selectedGroups.includes(group);
    };
    GroupsComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupService.getGroups().then(function (groups) { return _this.groups = groups; });
    };
    GroupsComponent.prototype.ngOnInit = function () {
        this.getGroups();
        this.getUsers();
    };
    GroupsComponent = __decorate([
        core_1.Component({
            selector: 'my-groups',
            templateUrl: './groups.component.html',
            styleUrls: ['./groups.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, group_service_1.GroupService])
    ], GroupsComponent);
    return GroupsComponent;
}());
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map