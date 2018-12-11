import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styles: []
})
export class AboutContainerComponent implements OnInit {
  public links = [
    {
      routerLink: './links',
      caption: 'Links'
    },
    {
      routerLink: './info',
      caption: 'Info'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
