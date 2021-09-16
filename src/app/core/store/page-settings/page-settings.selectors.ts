import { createSelector } from '@ngrx/store';
import { TemplatesSettingsState } from './page-settings.reducer';
import { AppState } from '../app.state';

export const selectTemplatesSettings = createSelector(
  (state: AppState) => state.pagesSettings,
  (settings: TemplatesSettingsState) => settings
);

export const getTemplatesSettings = createSelector(selectTemplatesSettings, (state => state.templatesSettings));

