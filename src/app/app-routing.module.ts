import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: PropertiesComponent },
  {path:'management/:id', loadChildren: () => import(`./management-portal/management-portal.module`).then(m => m.ManagementPortalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
