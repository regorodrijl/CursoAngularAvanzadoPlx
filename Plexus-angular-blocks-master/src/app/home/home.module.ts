import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeDashboardComponent } from './home-container/home-dashboard/home-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeContainerComponent, HomeDashboardComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
