import {
  USERMANAGEMENT_DOMAIN_FEATURE_KEY,
  State,
} from './usermanagement-domain.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const getUsermanagementDomainState = createFeatureSelector<State>(
  USERMANAGEMENT_DOMAIN_FEATURE_KEY
);
