import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as CompanySelectors from './company.selectors';
import * as fromUsermanagementDomain from '../usermanagement-domain.reducer';
import * as CompanyActions from './company.actions';
import { CompanyResetsFacade } from './company.facade.resets';
import {Company} from '@tpx-tpxrx-demo/api';

@Injectable()
export class CompanyFacade extends CompanyResetsFacade {
  company$ = this.store.pipe(select(CompanySelectors.getCompany));
  companyList$ = this.store.pipe(select(CompanySelectors.getCompanyList));
  loadCompanyListPending$ = this.store.pipe(
    select(CompanySelectors.getLoadCompanyListPending)
  );
  loadCompanyListSuccess$ = this.store.pipe(
    select(CompanySelectors.getLoadCompanyListSuccess)
  );
  loadCompanyListFailure$ = this.store.pipe(
    select(CompanySelectors.getLoadCompanyListFailure)
  );
  loadCompanyByIdPending$ = this.store.pipe(
    select(CompanySelectors.getLoadCompanyByIdPending)
  );
  loadCompanyByIdSuccess$ = this.store.pipe(
    select(CompanySelectors.getLoadCompanyByIdSuccess)
  );
  loadCompanyByIdFailure$ = this.store.pipe(
    select(CompanySelectors.getLoadCompanyByIdFailure)
  );
  createCompanyPending$ = this.store.pipe(
    select(CompanySelectors.getCreateCompanyPending)
  );
  createCompanySuccess$ = this.store.pipe(
    select(CompanySelectors.getCreateCompanySuccess)
  );
  createCompanyFailure$ = this.store.pipe(
    select(CompanySelectors.getCreateCompanyFailure)
  );
  updateCompanyPending$ = this.store.pipe(
    select(CompanySelectors.getUpdateCompanyPending)
  );
  updateCompanySuccess$ = this.store.pipe(
    select(CompanySelectors.getUpdateCompanySuccess)
  );
  updateCompanyFailure$ = this.store.pipe(
    select(CompanySelectors.getUpdateCompanyFailure)
  );
  deleteCompanyPending$ = this.store.pipe(
    select(CompanySelectors.getDeleteCompanyPending)
  );
  deleteCompanySuccess$ = this.store.pipe(
    select(CompanySelectors.getDeleteCompanySuccess)
  );
  deleteCompanyFailure$ = this.store.pipe(
    select(CompanySelectors.getDeleteCompanyFailure)
  );
  loadCompanyList(id: string) {
    this.dispatch(CompanyActions.loadCompanyList({ id }));
  }

  loadCompanyById(companyId: string) {
    this.dispatch(CompanyActions.loadCompanyById({ companyId }));
  }

  createCompany(company: Company) {
    this.dispatch(CompanyActions.createCompany({ company }));
  }

  updateCompany(companyId: string, company: Company) {
    this.dispatch(CompanyActions.updateCompany({ companyId, company }));
  }

  deleteCompany(companyId: string) {
    this.dispatch(CompanyActions.deleteCompany({ companyId }));
  }

  constructor(
    protected store: Store<fromUsermanagementDomain.UsermanagementDomainPartialState>
  ) {
    super(store);
  }
}
