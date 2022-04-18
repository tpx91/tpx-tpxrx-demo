import { ActionCreator, on, ReducerTypes } from '@ngrx/store';
import * as UserActions from './user.actions';
import { getUserResetsOns } from './user.reducer.resets';
import {User} from '@tpx-tpxrx-demo/api';
import {replaceArrayItem} from '@tpx1/util';

export interface UserState {
  user?: User;
  userList?: User[];
  loadUserListPending?: boolean;
  loadUserListSuccess?: boolean;
  loadUserListFailure?: Error;
  loadUserByIdPending?: boolean;
  loadUserByIdSuccess?: boolean;
  loadUserByIdFailure?: Error;
  createUserPending?: boolean;
  createUserSuccess?: boolean;
  createUserFailure?: Error;
  updateUserPending?: boolean;
  updateUserSuccess?: boolean;
  updateUserFailure?: Error;
  deleteUserPending?: boolean;
  deleteUserSuccess?: boolean;
  deleteUserFailure?: Error;
  resetUserListPending?: boolean;
  resetUserListSuccess?: boolean;
  resetUserListFailure?: Error;
}

export const userInitialState: UserState = {
  // Use carefully! userInitialState should be empty.
  // Arrays should be initiated with undefined or null to differ between unloaded array and loaded empty array.
};

export function getUserOns<T extends UserState>(): ReducerTypes<
  T,
  ActionCreator[]
>[] {
  return [
    ...getUserResetsOns<T>(),

    /*
     * loadUserList
     */
    on(UserActions.loadUserList, (state) => ({
      ...state,
      userList: null,
      loadUserListPending: true,
      loadUserListSuccess: false,
      loadUserListFailure: null,
    })),
    on(UserActions.loadUserListSuccess, (state, { userList }) => ({
      ...state,
      userList: userList,
      loadUserListPending: false,
      loadUserListSuccess: true,
    })),
    on(UserActions.loadUserListFailure, (state, { error }) => ({
      ...state,
      loadUserListPending: false,
      loadUserListFailure: error,
    })),

    /*
     * loadUserById
     */
    on(UserActions.loadUserById, (state) => ({
      ...state,
      user: null,
      loadUserByIdPending: true,
      loadUserByIdSuccess: false,
      loadUserByIdFailure: null,
    })),
    on(UserActions.loadUserByIdSuccess, (state, { user }) => ({
      ...state,
      user: user,
      loadUserByIdPending: false,
      loadUserByIdSuccess: true,
    })),
    on(UserActions.loadUserByIdFailure, (state, { error }) => ({
      ...state,
      loadUserByIdPending: false,
      loadUserByIdFailure: error,
    })),

    /*
     * createUser
     */
    on(UserActions.createUser, (state) => ({
      ...state,
      createUserPending: true,
      createUserSuccess: false,
      createUserFailure: null,
    })),
    on(UserActions.createUserSuccess, (state, { user }) => ({
      ...state,
      user: user,
      userList: [...(state.userList || []), user],
      createUserPending: false,
      createUserSuccess: true,
    })),
    on(UserActions.createUserFailure, (state, { error }) => ({
      ...state,
      createUserPending: false,
      createUserFailure: error,
    })),

    /*
     * updateUser
     */
    on(UserActions.updateUser, (state) => ({
      ...state,
      user: null,
      updateUserPending: true,
      updateUserSuccess: false,
      updateUserFailure: null,
    })),
    on(UserActions.updateUserSuccess, (state, { user }) => ({
      ...state,
      user: user,
      userList: replaceArrayItem(state.userList, user, 'id'),
      updateUserPending: false,
      updateUserSuccess: true,
    })),
    on(UserActions.updateUserFailure, (state, { error }) => ({
      ...state,
      updateUserPending: false,
      updateUserFailure: error,
    })),

    /*
     * deleteUser
     */
    on(UserActions.deleteUser, (state) => ({
      ...state,
      deleteUserPending: true,
      deleteUserSuccess: false,
      deleteUserFailure: null,
    })),
    on(UserActions.deleteUserSuccess, (state, { userId }) => ({
      ...state,
      userList: [...(state.userList?.filter((v) => v.id !== userId) || [])],
      deleteUserPending: false,
      deleteUserSuccess: true,
    })),
    on(UserActions.deleteUserFailure, (state, { error }) => ({
      ...state,
      deleteUserPending: false,
      deleteUserFailure: error,
    })),
  ];
}
