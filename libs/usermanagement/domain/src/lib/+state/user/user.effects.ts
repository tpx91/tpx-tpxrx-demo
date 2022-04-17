import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import {User, UserService} from '@tpx-tpxrx-demo/api';

@Injectable()
export class UserEffects {
  loadUserList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUserList),
      switchMap((act) =>
        this.userService.loadUserList().pipe(
          map((userList) => UserActions.loadUserListSuccess({ userList })),
          catchError((err) =>
            of(
              UserActions.loadUserListFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  loadUserById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUserById),
      switchMap((act) =>
        this.userService.loadUserById(act.userId).pipe(
          map((user) => UserActions.loadUserByIdSuccess({ user })),
          catchError((err) =>
            of(
              UserActions.loadUserByIdFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.createUser),
      switchMap((act) =>
        this.userService.createUser(act.user).pipe(
          map((user) => UserActions.createUserSuccess({ user })),
          catchError((err) =>
            of(
              UserActions.createUserFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap((act) =>
        this.userService.updateUser(act.userId, act.user).pipe(
          map((user) => UserActions.updateUserSuccess({ user })),
          catchError((err) =>
            of(
              UserActions.updateUserFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap((act) =>
        this.userService.deleteUser(act.userId).pipe(
          map(() => UserActions.deleteUserSuccess({ userId: act.userId })),
          catchError((err) =>
            of(
              UserActions.deleteUserFailure({
                error: err,
              })
            )
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
