import { Component, OnInit } from '@angular/core';

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
    value: 2345.897
  };
  constructor() {}

  ngOnInit() {}
}
