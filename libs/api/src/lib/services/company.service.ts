import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Company} from '../models';

@Injectable()
export class CompanyService {
  loadCompanyList(): Observable<Company[]> {
    return of([]);
  }
  loadCompanyById(companyId: string): Observable<Company> {
    return of({});
  }
  createCompany(company: Company): Observable<Company> {
    return of({});
  }
  updateCompany(companyId: string, company: Company): Observable<Company> {
    return of({});
  }
  deleteCompany(companyId: string): Observable<void> {
    return of();
  }
}
