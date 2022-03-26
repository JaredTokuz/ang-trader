import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TraderChartComponentComponent } from './trader-chart-component/trader-chart-component.component';

@NgModule({
  declarations: [AppComponent, TraderChartComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
