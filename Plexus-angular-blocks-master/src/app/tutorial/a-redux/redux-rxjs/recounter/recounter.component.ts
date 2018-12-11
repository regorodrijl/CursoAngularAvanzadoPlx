import { Component, OnInit } from '@angular/core';
import { Add, Substract } from '../store/counter.actions';
import { CounterService } from '../store/counter.service';

@Component({
  selector: 'app-recounter',
  templateUrl: './recounter.component.html',
  styleUrls: ['./recounter.component.css']
})
export class RecounterComponent implements OnInit {
  public value = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.select$().subscribe(data => (this.value = data.value));
  }

  onAddClick() {
    this.counterService.dispatch(new Add(1));
  }
  onSubstractClick() {
    this.counterService.dispatch(new Substract(1));
  }
}
