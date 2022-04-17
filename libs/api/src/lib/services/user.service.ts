import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models';

@Injectable()
export class UserService {
  loadUserList(): Observable<User[]> {
    return of([]);
  }
  loadUserById(userId: string): Observable<User> {
    return of({});
  }
  createUser(user: User): Observable<User> {
    return of({});
  }
  updateUser(userId: string, user: User): Observable<User> {
    return of({});
  }
  deleteUser(userId: string): Observable<void> {
    return of();
  }
}
