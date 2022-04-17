import { createAction, props } from '@ngrx/store';
import {User} from '@tpx-tpxrx-demo/api';

/*
 * loadUserList
 */
export const loadUserList = createAction(
  '[UsermanagementDomain] loadUserList',
  props<{ id: string }>()
);
export const loadUserListSuccess = createAction(
  '[UsermanagementDomain] loadUserListSuccess',
  props<{ userList: User[] }>()
);
export const loadUserListFailure = createAction(
  '[UsermanagementDomain] loadUserListFailure',
  props<{ error: Error }>()
);

/*
 * loadUserById
 */
export const loadUserById = createAction(
  '[UsermanagementDomain] loadUserById',
  props<{ userId: string }>()
);
export const loadUserByIdSuccess = createAction(
  '[UsermanagementDomain] loadUserByIdSuccess',
  props<{ user: User }>()
);
export const loadUserByIdFailure = createAction(
  '[UsermanagementDomain] loadUserByIdFailure',
  props<{ error: Error }>()
);

/*
 * createUser
 */
export const createUser = createAction(
  '[UsermanagementDomain] createUser',
  props<{ user: User }>()
);
export const createUserSuccess = createAction(
  '[UsermanagementDomain] createUserSuccess',
  props<{ user: User }>()
);
export const createUserFailure = createAction(
  '[UsermanagementDomain] createUserFailure',
  props<{ error: Error }>()
);

/*
 * updateUser
 */
export const updateUser = createAction(
  '[UsermanagementDomain] updateUser',
  props<{ userId: string; user: User }>()
);
export const updateUserSuccess = createAction(
  '[UsermanagementDomain] updateUserSuccess',
  props<{ user: User }>()
);
export const updateUserFailure = createAction(
  '[UsermanagementDomain] updateUserFailure',
  props<{ error: Error }>()
);

/*
 * deleteUser
 */
export const deleteUser = createAction(
  '[UsermanagementDomain] deleteUser',
  props<{ userId: string }>()
);
export const deleteUserSuccess = createAction(
  '[UsermanagementDomain] deleteUserSuccess',
  props<{ userId: string }>()
);
export const deleteUserFailure = createAction(
  '[UsermanagementDomain] deleteUserFailure',
  props<{ error: Error }>()
);
