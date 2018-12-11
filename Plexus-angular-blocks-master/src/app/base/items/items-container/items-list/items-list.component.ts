import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styles: []
})
export class ItemsListComponent implements OnInit {
  @Input() public items: any[];
  constructor() {}

  ngOnInit() {}
}
