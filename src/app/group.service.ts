import { Group } from './Entities/group';
import { GROUPS} from './Mokcs/mock-groups';
import { USERS } from './Mokcs/mock-users';
import { Injectable } from '@angular/core';

@Injectable()
export class GroupService {
    getGroups(): Promise<Group[]> {
        this.GetUsersForGroups(GROUPS);
        return Promise.resolve(GROUPS);
    }
    private GetUsersForGroups(groups: Group[]): void {
        for (let group of groups) {
            group.users = []; 
            for (let user of USERS) {
                if (group.name === user.group) {
                    group.users.push(user);
                }
            }
        }
    }
}


