import { Component } from '@angular/core';
import { StockComponent } from './stocks/stocks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 App';

  today = new Date();
}
