import { Component, Input, OnInit } from '@angular/core';
import { ButtonAreaConfig } from '../button-area/button-area.component';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css'],
})
export class ArticleHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() picture: string;
  @Input() buttons: ButtonAreaConfig;
  constructor() {}

  ngOnInit(): void {}
}
