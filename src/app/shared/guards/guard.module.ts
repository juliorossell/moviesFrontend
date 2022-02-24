import { NgModule } from '@angular/core';
import { CanActivateAdminGuard } from './Admin.guard';

import { CanActivateViaAuthGuard } from './Auth.guard';

@NgModule({
  providers: [
    CanActivateViaAuthGuard,
    CanActivateAdminGuard
  ],
})
export class GuardModule {}
