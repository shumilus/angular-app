import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-checker',
  templateUrl: './address-checker.component.html',
  styleUrls: ['./address-checker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressCheckerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
