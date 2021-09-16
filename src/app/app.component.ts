import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setTemplatesSettings } from './core/store/page-settings/page-settings.actions';

const data = 'test';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  templatesSettings: string;

  constructor(private _elementRef: ElementRef, private _store: Store) {
  }

  ngOnInit(): void {
    this.templatesSettings = data;
    this._store.dispatch(setTemplatesSettings({templatesSettings: this.templatesSettings}));
  }
}
