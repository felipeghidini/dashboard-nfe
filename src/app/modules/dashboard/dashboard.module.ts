import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DASHBOARD_ROUTES } from './dashboard.routing';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';

import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { MessageService } from 'primeng/api';
// import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    // PrimeNg
    SidebarModule,
    ToolbarModule,
    CardModule,
    ToastModule,
    ChartModule,
    // Shared
    SharedModule
  ],
  // providers: [CookieService, MessageService],
})
export class DashboardModule { }
