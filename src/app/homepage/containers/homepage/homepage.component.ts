import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getTemplatesSettings } from '../../../core/store/page-settings/page-settings.selectors';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  settings$: Observable<string> = this._store.select(getTemplatesSettings);

  constructor(private _store: Store) {
  }

  ngOnInit(): void {
  }

}
