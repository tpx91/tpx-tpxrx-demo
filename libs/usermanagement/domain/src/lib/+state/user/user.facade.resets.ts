import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as fromUsermanagementDomain from '../usermanagement-domain.reducer';
import * as UserResetsActions from './user.actions.resets';

@Injectable()
export class UserResetsFacade {
  resetUser() {
    this.dispatch(UserResetsActions.resetUser());
  }

  resetUserList() {
    this.dispatch(UserResetsActions.resetUserList());
  }

  resetUserAssets() {
    this.dispatch(UserResetsActions.resetUserAssets());
  }

  constructor(
    protected store: Store<fromUsermanagementDomain.UsermanagementDomainPartialState>
  ) {}

  protected dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
