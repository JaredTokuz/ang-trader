import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordCardOrganizer } from '../app.interfaces';

@Component({
  selector: 'app-grouped-card-directory',
  templateUrl: './grouped-card-directory.component.html',
  styleUrls: ['./grouped-card-directory.component.css'],
})
export class GroupedCardDirectoryComponent implements OnInit {
  @Input() recordCards$: Observable<RecordCardOrganizer[]>;
  constructor() {}

  ngOnInit(): void {}
}
