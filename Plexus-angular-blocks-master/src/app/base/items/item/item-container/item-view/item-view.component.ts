import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styles: []
})
export class ItemViewComponent implements OnInit {
  @Input() item: any;
  @Output() public delete = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}
