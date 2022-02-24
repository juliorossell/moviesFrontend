import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ManagmentComponent } from './managment.component';
import { ManagmentRoutingModule } from './managment-routing';
import { MoviesComponent } from './movies/movies.component';
import { LogsComponent } from './logs/logs.component';
import { MoviesService } from '../shared/services/micro-services/movies-service';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    ManagmentRoutingModule,
    RouterModule,
    SpinnerModule,
  ],
  declarations: [ ManagmentComponent, MoviesComponent, LogsComponent],
  exports: [ ManagmentComponent, MoviesComponent, LogsComponent],
  providers: [ MoviesService]
})
export class ManagmentModule { }
