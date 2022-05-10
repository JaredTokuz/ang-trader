import { Component, Input, OnInit } from '@angular/core';
import { Metric } from '../app.interfaces';

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
