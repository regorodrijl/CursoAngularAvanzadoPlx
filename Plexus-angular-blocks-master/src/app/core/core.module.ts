import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterceptorService } from './interceptor.service';
import { ShellContainerComponent } from './shell-container/shell-container.component';
import { ShellFooterComponent } from './shell-container/shell-footer/shell-footer.component';
import { ShellHeaderComponent } from './shell-container/shell-header/shell-header.component';
import { ShellMainComponent } from './shell-container/shell-main/shell-main.component';
import { ShellMessengerComponent } from './shell-container/shell-messenger/shell-messenger.component';

@NgModule({
  declarations: [
    ShellContainerComponent,
    ShellHeaderComponent,
    ShellFooterComponent,
    ShellMainComponent,
    ShellMessengerComponent
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  exports: [ShellContainerComponent]
})
export class CoreModule {}
