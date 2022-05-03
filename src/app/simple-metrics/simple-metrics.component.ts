import { Component, Input, OnInit } from '@angular/core';

export type Metric = {
  key: string;
  val: string | number;
};

@Component({
  selector: 'app-simple-metrics',
  templateUrl: './simple-metrics.component.html',
  styleUrls: ['./simple-metrics.component.css'],
})
export class SimpleMetricsComponent implements OnInit {
  @Input() metrics: Metric[];
  constructor() {}

  ngOnInit(): void {}
}
