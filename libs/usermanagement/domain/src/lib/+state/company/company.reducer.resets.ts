import { ActionCreator, on, ReducerTypes } from '@ngrx/store';
import * as CompanyResetsActions from './company.actions.resets';
import { CompanyState } from './company.reducer';

export function getCompanyResetsOns<T extends CompanyState>(): ReducerTypes<
  T,
  ActionCreator[]
>[] {
  return [
    /*
     * resetCompany
     */
    on(CompanyResetsActions.resetCompany, (state) => ({
      ...state,
      company: null,
    })),

    /*
     * resetCompanyList
     */
    on(CompanyResetsActions.resetCompanyList, (state) => ({
      ...state,
      companyList: null,
    })),

    /*
     * resetCompanyAssets
     */
    on(CompanyResetsActions.resetCompanyAssets, (state) => ({
      ...state,
      loadCompanyListPending: false,
      loadCompanyListSuccess: false,
      loadCompanyListFailure: null,
      loadCompanyByIdPending: false,
      loadCompanyByIdSuccess: false,
      loadCompanyByIdFailure: null,
      createCompanyPending: false,
      createCompanySuccess: false,
      createCompanyFailure: null,
      updateCompanyPending: false,
      updateCompanySuccess: false,
      updateCompanyFailure: null,
      deleteCompanyPending: false,
      deleteCompanySuccess: false,
      deleteCompanyFailure: null,
    })),
  ];
}
