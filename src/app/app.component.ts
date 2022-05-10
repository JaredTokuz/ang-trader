import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  outline_calendar,
  outline_cloud_upload,
  outline_cog,
  outline_home,
  outline_map,
  outline_searchCircle,
  outline_speakerphone,
  outline_userGroup,
  outline_viewGridAdd,
} from './icons';
import { MainStore } from './main.store';
import { NavElements } from './nav-items/nav-items.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // left most nav bar section
  appViews: NavElements[] = [
    {
      name: 'Dashboard',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_home),
    },
    {
      name: 'Upload',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_cloud_upload),
    },
    {
      name: 'Calendar',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_calendar),
    },
    {
      name: 'Teams',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_userGroup),
    },
    {
      name: 'Directory',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_searchCircle),
    },
    {
      name: 'Announcements',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_speakerphone),
    },
    {
      name: 'Office Map',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_map),
    },
  ];

  configViews: NavElements[] = [
    {
      name: 'Apps',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_viewGridAdd),
    },
    {
      name: 'Settings',
      svg: this.sanitizer.bypassSecurityTrustHtml(outline_cog),
    },
  ];

  /** user profile section */
  loggedInUser = 'Jared Tokuz';
  loggedInUserImg =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  /** middle nav bar section */
  recordColumnDescription = 'Search directory of 3,018 employees';

  /** use a rxjs map to push each records fetched into the correct bin */
  recordColumnOrganizer = {
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
  };

  recordColumnStatus = true;
  toggleRecordColumn() {
    this.recordColumnStatus = !this.recordColumnStatus;
    if (!this.recordColumnStatus) {
      this.mainStore.setSearchPopOut(false);
    }
  }

  constructor(private sanitizer: DomSanitizer, public mainStore: MainStore) {}
  ngOnInit(): void {}

  navBarFlexState = true;
  navBarCanvasState = true;
  toggleNavBarFlexState(flag: boolean) {
    this.navBarFlexState = flag;
    this.navBarCanvasState = flag;
  }
}
