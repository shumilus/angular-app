import { createReducer, on } from '@ngrx/store';
import { setTemplatesSettings } from './page-settings.actions';

export interface TemplatesSettingsState {
  templatesSettings: string;
}

export const initialTemplatesSettingsState: TemplatesSettingsState = {
  templatesSettings: undefined,
};

export const templatesSettingsReducer = createReducer(
  initialTemplatesSettingsState,

  on(setTemplatesSettings, (state, {templatesSettings}) => ({
    ...state,
    templatesSettings
  }))
);
