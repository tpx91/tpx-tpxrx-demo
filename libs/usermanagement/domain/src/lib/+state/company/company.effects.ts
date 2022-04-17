import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CompanyActions from './company.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import {CompanyService} from '@tpx-tpxrx-demo/api';

@Injectable()
export class CompanyEffects {
  loadCompanyList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.loadCompanyList),
      switchMap((act) =>
        this.companyService.loadCompanyList().pipe(
          map((companyList) => CompanyActions.loadCompanyListSuccess({ companyList })),
          catchError((err) =>
            of(
              CompanyActions.loadCompanyListFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  loadCompanyById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.loadCompanyById),
      switchMap((act) =>
        this.companyService.loadCompanyById(act.companyId).pipe(
          map((company) => CompanyActions.loadCompanyByIdSuccess({ company })),
          catchError((err) =>
            of(
              CompanyActions.loadCompanyByIdFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  createCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.createCompany),
      switchMap((act) =>
        this.companyService.createCompany(act.company).pipe(
          map((company) => CompanyActions.createCompanySuccess({ company })),
          catchError((err) =>
            of(
              CompanyActions.createCompanyFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  updateCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.updateCompany),
      switchMap((act) =>
        this.companyService.updateCompany(act.companyId, act.company).pipe(
          map((company) => CompanyActions.updateCompanySuccess({ company })),
          catchError((err) =>
            of(
              CompanyActions.updateCompanyFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  deleteCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.deleteCompany),
      switchMap((act) =>
        this.companyService.deleteCompany(act.companyId).pipe(
          map(() => CompanyActions.deleteCompanySuccess({ companyId: act.companyId })),
          catchError((err) =>
            of(
              CompanyActions.deleteCompanyFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}
}
