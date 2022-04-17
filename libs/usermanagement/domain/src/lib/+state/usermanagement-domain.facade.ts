import { Injectable } from '@angular/core';
import { UserFacade } from './user/user.facade';
import { CompanyFacade } from './company/company.facade';

@Injectable()
export class UsermanagementDomainFacade {
  userFacade: UserFacade;
  companyFacade: CompanyFacade;

  constructor(
    private userFacadeInternal: UserFacade,
    private companyFacadeInternal: CompanyFacade
  ) {
    this.userFacade = this.userFacadeInternal;
    this.companyFacade = this.companyFacadeInternal;
  }
}
