import { User } from './Entities/user';
import { USERS } from './Mokcs/mock-users';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
    }

}
