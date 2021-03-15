import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input()
  items: any = [{text:'Welcome Message',icon:'local_florist',index:0,component:'welcommessage'},
  {text:'What\'s New',icon:'announcement',index:1,component:'news'},
  {text:'Contact Information',icon:'call',index:2,component:'contact'},
  {text:'Access',icon:'location_on',index:3,component:'access'}]

  @Output() itemClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }
  
  curItem: number=0;
  clickItem(index:number){
    console.log(index);
    this.curItem = index;
    this.itemClick.emit(this.items[this.curItem].component)
  }
 
}
