import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styles: []
})
export class HomeDashboardComponent implements OnInit {
  @Input() blocks: any[];
  constructor() {}

  ngOnInit() {}
}
