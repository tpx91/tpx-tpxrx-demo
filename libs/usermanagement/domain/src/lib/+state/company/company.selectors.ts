import { getUsermanagementDomainState } from '../usermanagement-domain.selectors';
import { State } from '../usermanagement-domain.reducer';
import { createSelector } from '@ngrx/store';

export const getCompany = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.company
);

export const getCompanyList = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.companyList
);

export const getLoadCompanyListPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadCompanyListPending
);

export const getLoadCompanyListSuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadCompanyListSuccess
);

export const getLoadCompanyListFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadCompanyListFailure
);

export const getLoadCompanyByIdPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadCompanyByIdPending
);

export const getLoadCompanyByIdSuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadCompanyByIdSuccess
);

export const getLoadCompanyByIdFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadCompanyByIdFailure
);

export const getCreateCompanyPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.createCompanyPending
);

export const getCreateCompanySuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.createCompanySuccess
);

export const getCreateCompanyFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.createCompanyFailure
);

export const getUpdateCompanyPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.updateCompanyPending
);

export const getUpdateCompanySuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.updateCompanySuccess
);

export const getUpdateCompanyFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.updateCompanyFailure
);

export const getDeleteCompanyPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.deleteCompanyPending
);

export const getDeleteCompanySuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.deleteCompanySuccess
);

export const getDeleteCompanyFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.deleteCompanyFailure
);
