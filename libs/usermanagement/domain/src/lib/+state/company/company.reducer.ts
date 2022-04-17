import { ActionCreator, on, ReducerTypes } from '@ngrx/store';
import * as CompanyActions from './company.actions';
import { getCompanyResetsOns } from './company.reducer.resets';
import {Company} from '@tpx-tpxrx-demo/api';

export interface CompanyState {
  company?: Company;
  companyList?: Company[];
  loadCompanyListPending?: boolean;
  loadCompanyListSuccess?: boolean;
  loadCompanyListFailure?: Error;
  loadCompanyByIdPending?: boolean;
  loadCompanyByIdSuccess?: boolean;
  loadCompanyByIdFailure?: Error;
  createCompanyPending?: boolean;
  createCompanySuccess?: boolean;
  createCompanyFailure?: Error;
  updateCompanyPending?: boolean;
  updateCompanySuccess?: boolean;
  updateCompanyFailure?: Error;
  deleteCompanyPending?: boolean;
  deleteCompanySuccess?: boolean;
  deleteCompanyFailure?: Error;
  resetCompanyListPending?: boolean;
  resetCompanyListSuccess?: boolean;
  resetCompanyListFailure?: Error;
}

export const companyInitialState: CompanyState = {
  // Use carefully! companyInitialState should be empty.
  // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.
};

export function getCompanyOns<T extends CompanyState>(): ReducerTypes<
  T,
  ActionCreator[]
>[] {
  return [
    ...getCompanyResetsOns<T>(),

    /*
     * loadCompanyList
     */
    on(CompanyActions.loadCompanyList, (state) => ({
      ...state,
      companyList: null,
      loadCompanyListPending: true,
      loadCompanyListSuccess: false,
      loadCompanyListFailure: null,
    })),
    on(CompanyActions.loadCompanyListSuccess, (state, { companyList }) => ({
      ...state,
      companyList: companyList,
      loadCompanyListPending: false,
      loadCompanyListSuccess: true,
    })),
    on(CompanyActions.loadCompanyListFailure, (state, { error }) => ({
      ...state,
      loadCompanyListPending: false,
      loadCompanyListFailure: error,
    })),

    /*
     * loadCompanyById
     */
    on(CompanyActions.loadCompanyById, (state) => ({
      ...state,
      company: null,
      loadCompanyByIdPending: true,
      loadCompanyByIdSuccess: false,
      loadCompanyByIdFailure: null,
    })),
    on(CompanyActions.loadCompanyByIdSuccess, (state, { company }) => ({
      ...state,
      company: company,
      loadCompanyByIdPending: false,
      loadCompanyByIdSuccess: true,
    })),
    on(CompanyActions.loadCompanyByIdFailure, (state, { error }) => ({
      ...state,
      loadCompanyByIdPending: false,
      loadCompanyByIdFailure: error,
    })),

    /*
     * createCompany
     */
    on(CompanyActions.createCompany, (state) => ({
      ...state,
      createCompanyPending: true,
      createCompanySuccess: false,
      createCompanyFailure: null,
    })),
    on(CompanyActions.createCompanySuccess, (state, { company }) => ({
      ...state,
      company: company,
      companyList: [...(state.companyList || []), company],
      createCompanyPending: false,
      createCompanySuccess: true,
    })),
    on(CompanyActions.createCompanyFailure, (state, { error }) => ({
      ...state,
      createCompanyPending: false,
      createCompanyFailure: error,
    })),

    /*
     * updateCompany
     */
    on(CompanyActions.updateCompany, (state) => ({
      ...state,
      company: null,
      updateCompanyPending: true,
      updateCompanySuccess: false,
      updateCompanyFailure: null,
    })),
    on(CompanyActions.updateCompanySuccess, (state, { company }) => ({
      ...state,
      company: company,
      companyList: replaceArrayItem(state.companyList, company, 'id'),
      updateCompanyPending: false,
      updateCompanySuccess: true,
    })),
    on(CompanyActions.updateCompanyFailure, (state, { error }) => ({
      ...state,
      updateCompanyPending: false,
      updateCompanyFailure: error,
    })),

    /*
     * deleteCompany
     */
    on(CompanyActions.deleteCompany, (state) => ({
      ...state,
      deleteCompanyPending: true,
      deleteCompanySuccess: false,
      deleteCompanyFailure: null,
    })),
    on(CompanyActions.deleteCompanySuccess, (state, { companyId }) => ({
      ...state,
      companyList: [
        ...(state.companyList?.filter((v) => v.id !== companyId) || []),
      ],
      deleteCompanyPending: false,
      deleteCompanySuccess: true,
    })),
    on(CompanyActions.deleteCompanyFailure, (state, { error }) => ({
      ...state,
      deleteCompanyPending: false,
      deleteCompanyFailure: error,
    })),
  ];
}
