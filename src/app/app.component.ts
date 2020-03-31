import { Component, OnInit } from '@angular/core';
import { NgGrowlAlertService } from 'ng-growl-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private alertService : NgGrowlAlertService) {
    
  }

  ngOnInit(): void {
  }
}
