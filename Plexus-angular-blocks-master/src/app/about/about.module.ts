import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutContainerComponent } from './about-container/about-container.component';
import { AboutInfoComponent } from './about-container/about-info/about-info.component';
import { AboutLinksComponent } from './about-container/about-links/about-links.component';

@NgModule({
  declarations: [AboutContainerComponent, AboutInfoComponent, AboutLinksComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
