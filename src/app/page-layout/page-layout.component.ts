import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageName } from '../shared/constants/page-names.config';
import { Observable } from 'rxjs';
import { getPageName } from '../core/store/page-name/page-name.selectors';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent implements OnInit {
  pageName$: Observable<PageName>;

  homepage = PageName.homepage;

  constructor(private _store: Store) {
  }

  ngOnInit(): void {
    this.pageName$ = this._store.select(getPageName);
  }

}
