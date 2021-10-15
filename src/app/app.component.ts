import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { setTemplatesSettings } from './core/store/page-settings/page-settings.actions';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Observable } from 'rxjs';

const data = 'test';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  options = {
    types: [],
    componentRestrictions: { country: 'UK' }
  };

  templatesSettings: string;

  searchResult$: Observable<any>;

  _autoCompleteService = new google.maps.places.AutocompleteService();
  test: string;

  constructor(private _elementRef: ElementRef, private _store: Store) {
  }

  ngOnInit(): void {
    this.templatesSettings = data;
    this._store.dispatch(setTemplatesSettings({templatesSettings: this.templatesSettings}));
  }

  changeTest(event): void {
    console.log(event)
    this.searchPlaces(event)
      .subscribe(d => console.log(d));
  }

  public handleAddressChange(address: Address): void {
    console.log(address)
  }

  searchPlaces(term: string): Observable<google.maps.places.QueryAutocompletePrediction[]> {
    return new Observable<google.maps.places.QueryAutocompletePrediction[]>(observer => {
      this._autoCompleteService.getQueryPredictions({ input: term }, (
        predictions: google.maps.places.QueryAutocompletePrediction[],
        status: google.maps.places.PlacesServiceStatus
      ) => {
        observer.next(status === google.maps.places.PlacesServiceStatus.OK ? predictions : null);
        observer.complete();
      });
    });
  }
}
