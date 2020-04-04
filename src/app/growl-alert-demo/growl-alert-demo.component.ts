import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { CommonService } from '../_services/common.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-growl-alert-demo',
  templateUrl: './growl-alert-demo.component.html',
  styleUrls: ['./growl-alert-demo.component.css']
})
export class GrowlAlertDemoComponent implements OnInit, OnDestroy {
  showLeftSidebar: boolean;

  private leftSidebarSub: Subscription;
  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.commonService.showLeftSidebarBtn.next(true);
    this.leftSidebarSub = this.commonService.showLeftSidebar.subscribe( value => {
      this.showLeftSidebar = value;
    })
  }

  closeLeftSidebar() {
    this.showLeftSidebar = false;
  }

  ngOnDestroy() : void {
    this.leftSidebarSub.unsubscribe();
  }
}
