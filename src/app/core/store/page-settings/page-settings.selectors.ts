import { createFeatureSelector, createSelector } from '@ngrx/store';
import { templatesSettingsFeature, TemplatesSettingsState } from './page-settings.reducer';

export const getTemplatesSettingsState = createFeatureSelector<TemplatesSettingsState>(templatesSettingsFeature);

export const getTemplatesSettings = createSelector(getTemplatesSettingsState, (state => state.templatesSettings));
