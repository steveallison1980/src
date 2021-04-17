import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input()
  items: any = [{text:'Welcome Message',textJP:'ご挨拶',icon:'local_florist',index:0,component:'welcomemessage'},
  {text:'What\'s New',textJP:'最新情報',icon:'announcement',index:1,component:'news'},
  {text:'Contact Information',textJP:'連絡情報',icon:'call',index:2,component:'contact'}];


  @Output() itemClick = new EventEmitter<string>();

  public curItem: string="welcomemessage";

  constructor(private langService: LanguagesettingService,
    public nav: NavigateService ) {}

  ngOnInit(): void {
  }
  
  clickItem(component:string){
    console.log(component)
    this.nav.subPage = component;
    this.nav.curPerson = null;
    this.nav.view = "group";
    window.scroll(0, 0);
  }

  getText(item){
    if( this.langService.lang == "EN" ){
      return item.text;
    } else {
      return item.textJP;
    }
  }

  isCurItem(c){
    console.log(c);
    console.log(this.curItem);
    return ( c == this.curItem );
  }
 
}
