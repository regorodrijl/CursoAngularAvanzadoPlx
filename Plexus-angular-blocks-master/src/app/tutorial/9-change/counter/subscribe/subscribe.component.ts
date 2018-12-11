import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ItemsApiService } from '../../../../core/items-api.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SubscribeComponent implements OnInit {
  public items: any[];
  constructor(
    private itemsApiService: ItemsApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.itemsApiService.getAll().subscribe(data => {
      this.items = data;
      console.log('items', this.items);
      // this.cdr.detectChanges();
    });
  }
}
