import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutContainerComponent } from './about-container/about-container.component';
import { AboutInfoComponent } from './about-container/about-info/about-info.component';
import { AboutLinksComponent } from './about-container/about-links/about-links.component';

const routes: Routes = [
  {
    path: '',
    component: AboutContainerComponent,
    children: [
      {
        path: 'links',
        component: AboutLinksComponent
      },
      {
        path: 'info',
        component: AboutInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
