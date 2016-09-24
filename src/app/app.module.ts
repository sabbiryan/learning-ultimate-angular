import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StockComponent } from './stocks/stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { HighlightDirective } from './highlight.directive';
import { StockDirectiveDirective } from './stock-directive.directive';

import {StockService} from './stocks/stocks.service'; 

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    MutualfundsComponent,
    StockDirectiveDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
