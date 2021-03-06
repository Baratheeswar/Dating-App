import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgApexchartsModule
  ]
})
export class HomeModule { }
