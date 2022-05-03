import { Component, Input, OnInit } from '@angular/core';

type basicfunction = () => any;

export type RecordDetailCard = {
  picture: string | any;
  name: string;
  description: string;
  action: basicfunction;
};

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
