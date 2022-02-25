import { NgModule } from '@angular/core';

import { CanActivateAdminGuard } from './Admin.guard';
import { CanActivateViaAuthGuard } from './Auth.guard';
import { CanActivateViaIsLoggedGuard } from './IsLogged.guard';

@NgModule({
  providers: [
    CanActivateViaAuthGuard,
    CanActivateAdminGuard,
    CanActivateViaIsLoggedGuard
  ],
})
export class GuardModule {}
