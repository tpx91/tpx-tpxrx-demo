import { Action, createReducer } from '@ngrx/store';
import { UserState, userInitialState, getUserOns } from './user/user.reducer';
import {
  CompanyState,
  companyInitialState,
  getCompanyOns,
} from './company/company.reducer';

export const USERMANAGEMENT_DOMAIN_FEATURE_KEY = 'USERMANAGEMENT_DOMAIN';

export interface State extends UserState, CompanyState {}

export interface UsermanagementDomainPartialState {
  readonly [USERMANAGEMENT_DOMAIN_FEATURE_KEY]: State;
}

export const initialState: State = {
  ...userInitialState,
  ...companyInitialState,
};

const usermanagementDomainReducer = createReducer(
  initialState,
  ...getUserOns<State>(),
  ...getCompanyOns<State>()
);

export function reducer(state: State | undefined, action: Action) {
  return usermanagementDomainReducer(state, action);
}
