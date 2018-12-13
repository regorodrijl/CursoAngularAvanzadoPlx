import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-stocks-container',
  templateUrl: './stocks-container.component.html',
  styles: []
})
export class StocksContainerComponent implements OnInit {
  public company = {
    code: 'GOGL',
    name: 'Google',
    date: Date.now(),
    value: 2345.897,
    recomendation: 'buy'
  };
  constructor() {}

  ngOnInit() {
    if (this.company.recomendation === 'buy') {
      this.company.recomendation = environment.buy;
    } else {
      this.company.recomendation = environment.sell;
    }
  }
}
