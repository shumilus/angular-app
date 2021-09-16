import { createAction, props } from '@ngrx/store';
import { PageName } from '../../../shared/constants/page-names.config';

export const setPageName = createAction(
  '[Page name] Set page name',
  props<{ name: PageName }>()
);
