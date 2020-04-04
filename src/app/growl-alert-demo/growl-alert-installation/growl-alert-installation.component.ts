import { Component, OnInit } from '@angular/core';
import { NgGrowlAlertService } from 'ng-growl-alert';

@Component({
  selector: 'app-growl-alert-installation',
  templateUrl: './growl-alert-installation.component.html',
  styleUrls: ['./growl-alert-installation.component.css']
})
export class GrowlAlertInstallationComponent implements OnInit {

  constructor( private alertService: NgGrowlAlertService) { }

  ngOnInit() {
  }

  showAlert(){
    this.alertService.alert('This is an alert message', 'Example Alert', true);
  }

  showConfirm() {
    this.alertService.confirm('Are you liking this plugin?', 'Example Confirm', true);
  }

  showInfoGrowl() {
    this.alertService.infoGrowl('This is a usefull plugin', 'Plugin Info');
  }

}
