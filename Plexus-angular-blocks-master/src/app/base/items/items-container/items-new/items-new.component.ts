import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-new',
  templateUrl: './items-new.component.html',
  styles: []
})
export class ItemsNewComponent implements OnInit {
  @Output() public save = new EventEmitter<any>();
  public item = { description: '' };
  constructor() {}

  ngOnInit() {}
}
