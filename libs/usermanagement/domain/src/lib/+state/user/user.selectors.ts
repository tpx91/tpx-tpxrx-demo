import { getUsermanagementDomainState } from '../usermanagement-domain.selectors';
import { State } from '../usermanagement-domain.reducer';
import { createSelector } from '@ngrx/store';

export const getUser = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.user
);

export const getUserList = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.userList
);

export const getLoadUserListPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadUserListPending
);

export const getLoadUserListSuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadUserListSuccess
);

export const getLoadUserListFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadUserListFailure
);

export const getLoadUserByIdPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadUserByIdPending
);

export const getLoadUserByIdSuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadUserByIdSuccess
);

export const getLoadUserByIdFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.loadUserByIdFailure
);

export const getCreateUserPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.createUserPending
);

export const getCreateUserSuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.createUserSuccess
);

export const getCreateUserFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.createUserFailure
);

export const getUpdateUserPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.updateUserPending
);

export const getUpdateUserSuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.updateUserSuccess
);

export const getUpdateUserFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.updateUserFailure
);

export const getDeleteUserPending = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.deleteUserPending
);

export const getDeleteUserSuccess = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.deleteUserSuccess
);

export const getDeleteUserFailure = createSelector(
  getUsermanagementDomainState,
  (state: State) => state.deleteUserFailure
);
