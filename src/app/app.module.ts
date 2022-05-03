import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TraderChartComponentComponent } from './trader-chart-component/trader-chart-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonAreaComponent } from './button-area/button-area.component';
import { ActionableCardsComponent } from './actionable-cards/actionable-cards.component';
import { SimpleMetricsComponent } from './simple-metrics/simple-metrics.component';
import { DescriptionBlockComponent } from './description-block/description-block.component';
import { LogoComponent } from './logo/logo.component';
import { TabsComponent } from './tabs/tabs.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TraderChartComponentComponent,
    ButtonAreaComponent,
    ActionableCardsComponent,
    SimpleMetricsComponent,
    DescriptionBlockComponent,
    LogoComponent,
    TabsComponent,
    ArticleHeaderComponent,
    SearchBoxComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
