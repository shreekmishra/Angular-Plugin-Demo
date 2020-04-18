import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgGrowlAlertService, AlertConfirmResponse } from 'ng-growl-alert';

declare const PR: any;

@Component({
  selector: 'app-alert-demo',
  templateUrl: './alert-demo.component.html',
  styleUrls: ['./alert-demo.component.css']
})
export class AlertDemoComponent implements OnInit, AfterViewChecked {

  constructor(private alertService: NgGrowlAlertService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

  showAlert(message: string, title?: string, allowClose?: boolean) {
    this.alertService.alert(message, title, allowClose);
  }

  alertResponseExample() {
    this.alertService.alert('This example to demontrate the return value', 'Alert Response Example', true).subscribe(value => {
      if (value == AlertConfirmResponse.ALERT_OKAY) {
        alert('User clicked \'Okay\' button');
      } else if (value == AlertConfirmResponse.ALERT_CLOSE) {
        alert('User closed the alert box');
      }
    });
  }
}
