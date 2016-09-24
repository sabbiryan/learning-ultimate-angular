/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockServiceAutoGenService } from './stock-service-auto-gen.service';

describe('Service: StockServiceAutoGen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockServiceAutoGenService]
    });
  });

  it('should ...', inject([StockServiceAutoGenService], (service: StockServiceAutoGenService) => {
    expect(service).toBeTruthy();
  }));
});
