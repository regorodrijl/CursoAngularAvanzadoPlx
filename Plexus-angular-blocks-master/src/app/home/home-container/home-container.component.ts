import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlocksService } from '../../core/blocks.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styles: []
})
export class HomeContainerComponent implements OnInit {
  public blocks$: Observable<any[]>;
  constructor(private blocksService: BlocksService) {}

  ngOnInit() {
    this.blocks$ = this.blocksService.getBlocks$();
  }
}
