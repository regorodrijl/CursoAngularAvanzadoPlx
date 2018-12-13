import { Component, Input, OnInit } from '@angular/core';
import { MathService } from './math.service';

@Component({
  selector: 'lib-math',
  template: `
    <h3>Math Operations</h3>
    <form>
      <div>
        <label>Number 1</label>
        <input type="number" [(ngModel)]="number1" name="number1" />
      </div>
      <div>
        <label>Number 2</label>
        <input type="number" [(ngModel)]="number2" name="number2" />
      </div>
      <div><input type="button" value="Sum" (click)="onSumClick()" /></div>
      <div><label>Result: </label> {{ result }}</div>
    </form>
  `,
  styles: []
})
export class MathComponent implements OnInit {
  @Input()
  public number1 = 0;
  @Input()
  public number2 = 0;

  public result = 0;

  constructor(private mathService: MathService) {}

  ngOnInit() {}

  public onSumClick() {
    this.result = this.mathService.sum(this.number1, this.number2);
  }
}
