import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StockComponent} from './stocks/stocks.component';

const appRouters: Routes = [{
    path: 'stocks',
    component: StockComponent
}];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);