import { createAction } from '@ngrx/store';

/*
 * resetCompany
 */
export const resetCompany = createAction('[UsermanagementDomain] resetCompany');

/*
 * resetCompanyList
 */
export const resetCompanyList = createAction(
  '[UsermanagementDomain] resetCompanyList'
);

/*
 * resetCompanyAssets
 */
export const resetCompanyAssets = createAction(
  '[UsermanagementDomain] resetCompanyAssets'
);
