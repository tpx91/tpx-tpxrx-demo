import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as fromUsermanagementDomain from '../usermanagement-domain.reducer';
import * as CompanyResetsActions from './company.actions.resets';

@Injectable()
export class CompanyResetsFacade {
  resetCompany() {
    this.dispatch(CompanyResetsActions.resetCompany());
  }

  resetCompanyList() {
    this.dispatch(CompanyResetsActions.resetCompanyList());
  }

  resetCompanyAssets() {
    this.dispatch(CompanyResetsActions.resetCompanyAssets());
  }

  constructor(
    protected store: Store<fromUsermanagementDomain.UsermanagementDomainPartialState>
  ) {}

  protected dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
