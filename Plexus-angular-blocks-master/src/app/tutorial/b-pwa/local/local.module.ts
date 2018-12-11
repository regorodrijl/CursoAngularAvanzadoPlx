import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalRoutingModule } from './local-routing.module';
import { PwaContainerComponent } from './pwa-container/pwa-container.component';

@NgModule({
  declarations: [PwaContainerComponent],
  imports: [CommonModule, LocalRoutingModule]
})
export class LocalModule {}
