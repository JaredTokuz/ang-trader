import { Component, Input, OnInit } from '@angular/core';
import { MainStore } from '../main.store';

export interface NavElements {
  name: string;
  svg?: any;
}

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css'],
})
export class NavItemsComponent implements OnInit {
  @Input() navItems: NavElements[];

  constructor(private main: MainStore) {}

  ngOnInit(): void {}

  navSelect({ name }: NavElements) {
    this.main.setNavSelected(name);
  }
  isNavSelected({ name }: NavElements) {
    return this.main.isNavSelected(name);
  }
}
