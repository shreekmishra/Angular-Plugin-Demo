import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PluginListComponent } from './plugin-list/plugin-list.component';
import { GrowlAlertDemoComponent } from './growl-alert-demo/growl-alert-demo.component';
import { GrowlAlertInstallationComponent } from './growl-alert-demo/growl-alert-installation/growl-alert-installation.component';
import { AlertDemoComponent } from './growl-alert-demo/alert-demo/alert-demo.component';
import { GrowlSuccessDemoComponent } from './growl-alert-demo/growl-success-demo/growl-success-demo.component';
import { ConfirmDemoComponent } from './growl-alert-demo/confirm-demo/confirm-demo.component';
import { GrowlErrorDemoComponent } from './growl-alert-demo/growl-error-demo/growl-error-demo.component';
import { GrowlInfoDemoComponent } from './growl-alert-demo/growl-info-demo/growl-info-demo.component';
import { GrowlWarnDemoComponent } from './growl-alert-demo/growl-warn-demo/growl-warn-demo.component';


const routes: Routes = [
  {path:'', component: PluginListComponent},
  {path:'growl-alert-demo', component: GrowlAlertDemoComponent, children: [
      {path: 'installation', component: GrowlAlertInstallationComponent},
      {path: 'alert-demo', component: AlertDemoComponent},
      {path: 'confirm-demo', component: ConfirmDemoComponent},
      {path: 'sucess-demo', component: GrowlSuccessDemoComponent},
      {path: 'error-demo', component: GrowlErrorDemoComponent},
      {path: 'info-demo', component: GrowlInfoDemoComponent},
      {path: 'warn-demo', component: GrowlWarnDemoComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
