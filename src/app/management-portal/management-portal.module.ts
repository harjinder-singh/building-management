import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentsComponent } from './apartments/apartments.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes = [
  {path: 'apartments', component: ApartmentsComponent},
  {path: '', pathMatch: 'full', component: DashboardComponent}
];

@NgModule({
  declarations: [
    ApartmentsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagementPortalModule { }
