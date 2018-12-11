import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-messenger',
  templateUrl: './shell-messenger.component.html',
  styles: []
})
export class ShellMessengerComponent implements OnInit {
  @Input() message: any;
  constructor() {}

  ngOnInit() {}
}
