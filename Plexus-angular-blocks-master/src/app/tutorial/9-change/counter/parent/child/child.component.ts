import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() public counter = 0;
  @Input() public item = { name: '', value: 0 };
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName) {
        const change = changes[propName];
        console.log(propName, JSON.stringify(change));
      }
    }
  }
}
