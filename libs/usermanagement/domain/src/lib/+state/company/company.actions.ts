import { createAction, props } from '@ngrx/store';
import {Company} from '@tpx-tpxrx-demo/api';

/*
 * loadCompanyList
 */
export const loadCompanyList = createAction(
  '[UsermanagementDomain] loadCompanyList',
  props<{ id: string }>()
);
export const loadCompanyListSuccess = createAction(
  '[UsermanagementDomain] loadCompanyListSuccess',
  props<{ companyList: Company[] }>()
);
export const loadCompanyListFailure = createAction(
  '[UsermanagementDomain] loadCompanyListFailure',
  props<{ error: Error }>()
);

/*
 * loadCompanyById
 */
export const loadCompanyById = createAction(
  '[UsermanagementDomain] loadCompanyById',
  props<{ companyId: string }>()
);
export const loadCompanyByIdSuccess = createAction(
  '[UsermanagementDomain] loadCompanyByIdSuccess',
  props<{ company: Company }>()
);
export const loadCompanyByIdFailure = createAction(
  '[UsermanagementDomain] loadCompanyByIdFailure',
  props<{ error: Error }>()
);

/*
 * createCompany
 */
export const createCompany = createAction(
  '[UsermanagementDomain] createCompany',
  props<{ company: Company }>()
);
export const createCompanySuccess = createAction(
  '[UsermanagementDomain] createCompanySuccess',
  props<{ company: Company }>()
);
export const createCompanyFailure = createAction(
  '[UsermanagementDomain] createCompanyFailure',
  props<{ error: Error }>()
);

/*
 * updateCompany
 */
export const updateCompany = createAction(
  '[UsermanagementDomain] updateCompany',
  props<{ companyId: string; company: Company }>()
);
export const updateCompanySuccess = createAction(
  '[UsermanagementDomain] updateCompanySuccess',
  props<{ company: Company }>()
);
export const updateCompanyFailure = createAction(
  '[UsermanagementDomain] updateCompanyFailure',
  props<{ error: Error }>()
);

/*
 * deleteCompany
 */
export const deleteCompany = createAction(
  '[UsermanagementDomain] deleteCompany',
  props<{ companyId: string }>()
);
export const deleteCompanySuccess = createAction(
  '[UsermanagementDomain] deleteCompanySuccess',
  props<{ companyId: string }>()
);
export const deleteCompanyFailure = createAction(
  '[UsermanagementDomain] deleteCompanyFailure',
  props<{ error: Error }>()
);
