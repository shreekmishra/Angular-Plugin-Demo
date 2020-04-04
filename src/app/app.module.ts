import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgGrowlAlertModule } from 'ng-growl-alert'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrowlAlertDemoComponent } from './growl-alert-demo/growl-alert-demo.component';
import { PluginListComponent } from './plugin-list/plugin-list.component';
import { GrowlAlertInstallationComponent } from './growl-alert-demo/growl-alert-installation/growl-alert-installation.component';
import { AlertDemoComponent } from './growl-alert-demo/alert-demo/alert-demo.component';
import { ConfirmDemoComponent } from './growl-alert-demo/confirm-demo/confirm-demo.component';
import { GrowlSuccessDemoComponent } from './growl-alert-demo/growl-success-demo/growl-success-demo.component';
import { GrowlErrorDemoComponent } from './growl-alert-demo/growl-error-demo/growl-error-demo.component';
import { GrowlInfoDemoComponent } from './growl-alert-demo/growl-info-demo/growl-info-demo.component';
import { GrowlWarnDemoComponent } from './growl-alert-demo/growl-warn-demo/growl-warn-demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GrowlAlertDemoComponent,
    PluginListComponent,
    GrowlAlertInstallationComponent,
    AlertDemoComponent,
    ConfirmDemoComponent,
    GrowlSuccessDemoComponent,
    GrowlErrorDemoComponent,
    GrowlInfoDemoComponent,
    GrowlWarnDemoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGrowlAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
