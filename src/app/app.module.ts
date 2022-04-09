import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TraderChartComponentComponent } from './trader-chart-component/trader-chart-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonAreaComponent } from './button-area/button-area.component';

@NgModule({
  declarations: [
    AppComponent,
    TraderChartComponentComponent,
    ButtonAreaComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
