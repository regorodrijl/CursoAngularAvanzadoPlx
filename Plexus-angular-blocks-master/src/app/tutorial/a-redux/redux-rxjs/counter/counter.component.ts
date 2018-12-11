import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public value = 0;

  constructor() {}

  ngOnInit() {}

  onAddClick() {
    this.value++;
  }
  onSubstractClick() {
    this.value--;
  }
}
