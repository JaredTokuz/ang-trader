import { Component, Input, OnInit } from '@angular/core';
import { RecordDetailDescription } from '../app.interfaces';

@Component({
  selector: 'app-description-block',
  templateUrl: './description-block.component.html',
  styleUrls: ['./description-block.component.css'],
})
export class DescriptionBlockComponent implements OnInit {
  @Input() description: RecordDetailDescription[];
  constructor() {}

  ngOnInit(): void {}
}
