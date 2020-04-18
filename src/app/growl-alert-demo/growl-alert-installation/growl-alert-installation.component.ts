import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { NgGrowlAlertService } from 'ng-growl-alert';

declare const PR: any;

@Component({
  selector: 'app-growl-alert-installation',
  templateUrl: './growl-alert-installation.component.html',
  styleUrls: ['./growl-alert-installation.component.css']
})
export class GrowlAlertInstallationComponent implements OnInit, AfterViewChecked {

  constructor(private alertService: NgGrowlAlertService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

  showAlert() {
    this.alertService.alert('This is an alert message', 'Example Alert', true);
  }

  showConfirm() {
    this.alertService.confirm('Are you liking this plugin?', 'Example Confirm', true);
  }

  showInfoGrowl() {
    this.alertService.infoGrowl('This is a usefull plugin', 'Plugin Info');
  }

}
