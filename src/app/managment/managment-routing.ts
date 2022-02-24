import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAdminGuard } from '../shared/guards/Admin.guard';
import { LogsComponent } from './logs/logs.component';
import { ManagmentComponent } from './managment.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {
    path: '',
    component: ManagmentComponent,
    children: [
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'logs',
        canActivate: [CanActivateAdminGuard],
        component: LogsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagmentRoutingModule {}
