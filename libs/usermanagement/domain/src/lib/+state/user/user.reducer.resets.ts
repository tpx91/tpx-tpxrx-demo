import { ActionCreator, on, ReducerTypes } from '@ngrx/store';
import * as UserResetsActions from './user.actions.resets';
import { UserState } from './user.reducer';

export function getUserResetsOns<T extends UserState>(): ReducerTypes<
  T,
  ActionCreator[]
>[] {
  return [
    /*
     * resetUser
     */
    on(UserResetsActions.resetUser, (state) => ({
      ...state,
      user: null,
    })),

    /*
     * resetUserList
     */
    on(UserResetsActions.resetUserList, (state) => ({
      ...state,
      userList: null,
    })),

    /*
     * resetUserAssets
     */
    on(UserResetsActions.resetUserAssets, (state) => ({
      ...state,
      loadUserListPending: false,
      loadUserListSuccess: false,
      loadUserListFailure: null,
      loadUserByIdPending: false,
      loadUserByIdSuccess: false,
      loadUserByIdFailure: null,
      createUserPending: false,
      createUserSuccess: false,
      createUserFailure: null,
      updateUserPending: false,
      updateUserSuccess: false,
      updateUserFailure: null,
      deleteUserPending: false,
      deleteUserSuccess: false,
      deleteUserFailure: null,
    })),
  ];
}
