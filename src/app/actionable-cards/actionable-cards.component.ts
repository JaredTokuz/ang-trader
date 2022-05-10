import { Component, Input, OnInit } from '@angular/core';
import { RecordDetailCard } from '../app.interfaces';

@Component({
  selector: 'app-actionable-cards',
  templateUrl: './actionable-cards.component.html',
  styleUrls: ['./actionable-cards.component.css'],
})
export class ActionableCardsComponent implements OnInit {
  @Input() cards: RecordDetailCard[];

  constructor() {}

  ngOnInit(): void {}
}
