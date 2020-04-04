import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CommonService } from '../_services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  hasLeftSidebar: boolean;
  private leftSidebarBtnSub : Subscription;
  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.hasLeftSidebar = true;
    this.commonService.showLeftSidebarBtn.subscribe( value => {
      this.hasLeftSidebar = value;
    })
  }

  showLeftSidebar() {
    this.commonService.showLeftSidebar.next(true);
  }

  ngOnDestroy(): void {
    this.leftSidebarBtnSub.unsubscribe();
  }

}
