import { Component, Input, OnInit } from '@angular/core';
import { MainStore } from '../main.store';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @Input() navSelected: string;
  @Input() recordColumnDescription: string;
  constructor(public mainStore: MainStore) {}

  ngOnInit(): void {}

  togglePopout() {
    this.mainStore.setSearchPopOut(!this.mainStore.getSearchPopOutState());
  }
}
