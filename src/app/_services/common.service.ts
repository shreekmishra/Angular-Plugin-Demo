import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  showLeftSidebar : Subject<boolean> = new Subject<boolean>();
  showLeftSidebarBtn : Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
