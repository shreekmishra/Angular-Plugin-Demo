import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-plugin-list',
  templateUrl: './plugin-list.component.html',
  styleUrls: ['./plugin-list.component.css']
})
export class PluginListComponent implements OnInit {
  pluginList : {title, desc, url}[] = [
    {title : 'ng-Growl-Alert', desc : 'An angular plugin to show alert boxes and growl message.', url: '/growl-alert-demo'}
  ];
  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.commonService.showLeftSidebarBtn.next(false);
  }

}
