import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';
import { SITEMAP_DATA } from '../../../../assets/data/staticnav';
import { ILink } from '../../../interfaces/isitemap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public curItem: string="welcomemessage";

  constructor(private langService: LanguagesettingService,
    public nav: NavigateService ) {}

  ngOnInit(): void {
  }

  clickItem(component:string, curpage:string){
    console.log(curpage, component)
    this.nav.subPage = component;
    this.nav.curPerson = null;
    this.nav.view = "group";
    this.nav.cafcfilter = component;
    if( curpage == "cafcreports") this.nav.cafcreport = null;
    window.scroll(0, 0);
  }

  getText(item:ILink){
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

  getPage(){
    for(let i in SITEMAP_DATA.pages){
      if (SITEMAP_DATA.pages[i].mainpage == this.nav.curPage ) {
        return SITEMAP_DATA.pages[i];
      }
    }
  }
 
}
