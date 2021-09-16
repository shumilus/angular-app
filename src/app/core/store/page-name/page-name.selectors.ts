import { PageNameState } from './page-name.reducer';
import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

export const selectPageName = createSelector(
  (state: AppState) => state.pageName,
  (pageNameState: PageNameState) => pageNameState
);

export const getPageName = createSelector(selectPageName, (state => state.name));
