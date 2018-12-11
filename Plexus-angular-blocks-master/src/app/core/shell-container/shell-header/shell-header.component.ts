import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-header',
  templateUrl: './shell-header.component.html',
  styles: []
})
export class ShellHeaderComponent implements OnInit {
  @Input() public title = 'Angular Blocks';
  @Input() blocks: any[];
  constructor() {}

  ngOnInit() {}
}
