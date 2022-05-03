import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: string[];
  constructor() {}

  ngOnInit(): void {}

  tabSelected = 'Main';
  isTabSelected(name: string) {
    return name == this.tabSelected;
  }

  tabSelect(name: string) {
    this.tabSelected = name;
  }
}
