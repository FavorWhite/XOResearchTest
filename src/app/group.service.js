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
var mock_groups_1 = require('./Mokcs/mock-groups');
var mock_users_1 = require('./Mokcs/mock-users');
var core_1 = require('@angular/core');
var GroupService = (function () {
    function GroupService() {
    }
    GroupService.prototype.getGroups = function () {
        this.GetUsersForGroups(mock_groups_1.GROUPS);
        return Promise.resolve(mock_groups_1.GROUPS);
    };
    GroupService.prototype.GetUsersForGroups = function (groups) {
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            group.users = [];
            for (var _a = 0, USERS_1 = mock_users_1.USERS; _a < USERS_1.length; _a++) {
                var user = USERS_1[_a];
                if (group.name === user.group) {
                    group.users.push(user);
                }
            }
        }
    };
    GroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map