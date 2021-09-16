import { createAction, props } from '@ngrx/store';

export const setTemplatesSettings = createAction(
  '[Templates Settings] Set settings',
  props<{ templatesSettings: string }>()
);
