import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromUsermanagementDomain from './+state/usermanagement-domain.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsermanagementDomainFacade } from './+state/usermanagement-domain.facade';
import { UserFacade } from './+state/user/user.facade';
import { UserEffects } from './+state/user/user.effects';
import { CompanyFacade } from './+state/company/company.facade';
import { CompanyEffects } from './+state/company/company.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
      fromUsermanagementDomain.USERMANAGEMENT_DOMAIN_FEATURE_KEY,
      fromUsermanagementDomain.reducer
    ),
    EffectsModule.forFeature([UserEffects, CompanyEffects]),
  ],
  providers: [UsermanagementDomainFacade, UserFacade, CompanyFacade],
})
export class UsermanagementDomainModule {}
