import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input()
  items: any = [{text:'Welcome Message',textJP:'ご挨拶',icon:'local_florist',index:0,component:'welcommessage'},
  {text:'What\'s New',textJP:'最新情報',icon:'announcement',index:1,component:'news'},
  {text:'Contact Information',textJP:'連絡情報',icon:'call',index:2,component:'contact'},
  {text:'Access',textJP:'アクセス',icon:'location_on',index:3,component:'access'}]

  @Output() itemClick = new EventEmitter<string>();

  constructor(private langService: LanguagesettingService) {}

  ngOnInit(): void {
  }
  
  curItem: number=0;
  clickItem(index:number){
    console.log(index);
    this.curItem = index;
    this.itemClick.emit(this.items[this.curItem].component)
    window.scroll(0, 0);
  }

  getText(item){
    if( this.langService.lang == "EN" ){
      return item.text;
    } else {
      return item.textJP;
    }
  }
 
}
