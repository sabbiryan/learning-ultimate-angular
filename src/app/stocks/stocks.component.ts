import { Component } from '@angular/core';
import {StockService} from './stocks.service';

@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
    {{title}}

    <ul *ngFor="let stock of stocks">
        {{stock}}
    </ul>

    `
})

export class StockComponent{
 
title = "List of Stocks";
// stocks = ["AAPL", "IBM", "GOG", "UDEMY"];

stocks;

    constructor(stockService: StockService){
        this.stocks = stockService.getStocks();
    }

}