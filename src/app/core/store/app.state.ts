import { TemplatesSettingsState } from './page-settings/page-settings.reducer';
import { PageNameState } from './page-name/page-name.reducer';

export interface AppState {
  pageName: PageNameState;
  pagesSettings: TemplatesSettingsState;
}
