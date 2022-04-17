import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UserSelectors from './user.selectors';
import * as fromUsermanagementDomain from '../usermanagement-domain.reducer';
import * as UserActions from './user.actions';
import { UserResetsFacade } from './user.facade.resets';
import {User} from '@tpx-tpxrx-demo/api';

@Injectable()
export class UserFacade extends UserResetsFacade {
  user$ = this.store.pipe(select(UserSelectors.getUser));
  userList$ = this.store.pipe(select(UserSelectors.getUserList));
  loadUserListPending$ = this.store.pipe(
    select(UserSelectors.getLoadUserListPending)
  );
  loadUserListSuccess$ = this.store.pipe(
    select(UserSelectors.getLoadUserListSuccess)
  );
  loadUserListFailure$ = this.store.pipe(
    select(UserSelectors.getLoadUserListFailure)
  );
  loadUserByIdPending$ = this.store.pipe(
    select(UserSelectors.getLoadUserByIdPending)
  );
  loadUserByIdSuccess$ = this.store.pipe(
    select(UserSelectors.getLoadUserByIdSuccess)
  );
  loadUserByIdFailure$ = this.store.pipe(
    select(UserSelectors.getLoadUserByIdFailure)
  );
  createUserPending$ = this.store.pipe(
    select(UserSelectors.getCreateUserPending)
  );
  createUserSuccess$ = this.store.pipe(
    select(UserSelectors.getCreateUserSuccess)
  );
  createUserFailure$ = this.store.pipe(
    select(UserSelectors.getCreateUserFailure)
  );
  updateUserPending$ = this.store.pipe(
    select(UserSelectors.getUpdateUserPending)
  );
  updateUserSuccess$ = this.store.pipe(
    select(UserSelectors.getUpdateUserSuccess)
  );
  updateUserFailure$ = this.store.pipe(
    select(UserSelectors.getUpdateUserFailure)
  );
  deleteUserPending$ = this.store.pipe(
    select(UserSelectors.getDeleteUserPending)
  );
  deleteUserSuccess$ = this.store.pipe(
    select(UserSelectors.getDeleteUserSuccess)
  );
  deleteUserFailure$ = this.store.pipe(
    select(UserSelectors.getDeleteUserFailure)
  );
  loadUserList(id: string) {
    this.dispatch(UserActions.loadUserList({ id }));
  }

  loadUserById(userId: string) {
    this.dispatch(UserActions.loadUserById({ userId }));
  }

  createUser(user: User) {
    this.dispatch(UserActions.createUser({ user }));
  }

  updateUser(userId: string, user: User) {
    this.dispatch(UserActions.updateUser({ userId, user }));
  }

  deleteUser(userId: string) {
    this.dispatch(UserActions.deleteUser({ userId }));
  }

  constructor(
    protected store: Store<fromUsermanagementDomain.UsermanagementDomainPartialState>
  ) {
    super(store);
  }
}
