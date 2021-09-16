import { createReducer, on } from '@ngrx/store';
import { setPageName } from './page-name.actions';
import { PageName } from '../../../shared/constants/page-names.config';

export interface PageNameState {
  name: PageName;
}

export const initialTemplatesSettingsState: PageNameState = {
  name: PageName.homepage
};

export const pageNameReducer = createReducer(
  initialTemplatesSettingsState,

  on(setPageName, (state, {name}) => ({
    ...state,
    name
  }))
);
