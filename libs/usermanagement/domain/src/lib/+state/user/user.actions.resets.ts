import { createAction } from '@ngrx/store';

/*
 * resetUser
 */
export const resetUser = createAction('[UsermanagementDomain] resetUser');

/*
 * resetUserList
 */
export const resetUserList = createAction(
  '[UsermanagementDomain] resetUserList'
);

/*
 * resetUserAssets
 */
export const resetUserAssets = createAction(
  '[UsermanagementDomain] resetUserAssets'
);
