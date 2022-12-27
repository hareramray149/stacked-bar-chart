import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';

import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
import { StackedChartBorderWidthComponent } from './stacked-chart-border-width/stacked-chart-border-width.component';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    ChartDemoComponent,
    StackedChartBorderWidthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
