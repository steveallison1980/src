import { Component, OnInit, Input } from '@angular/core';
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

  @Input() menu: string;
  @Input() highlight: string;

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

  isHighlighted(c){
    return ( c == this.highlight );
  }

  getPage(){
    for(let i in SITEMAP_DATA.pages){
      if (SITEMAP_DATA.pages[i].mainpage == this.nav.curPage ) {
        return SITEMAP_DATA.pages[i];
      }
    }
  }

  getLinks(){
    var links:Array<ILink>;
    links = new Array();
    for(let i in SITEMAP_DATA.pages){
      if (SITEMAP_DATA.pages[i].mainpage == this.menu ) {
        for(let j in SITEMAP_DATA.pages[i].links){
          if( this.isDisplayed(SITEMAP_DATA.pages[i].links[j]) ){
            links.push(SITEMAP_DATA.pages[i].links[j]);
          }
        }
        return links;
      }
    }
  }
  isDisplayed(link:ILink){
    if( link.displayMode == "both") return true;
    if( link.displayMode == "ENonly" && this.langService.lang == "EN") return true;
    if( link.displayMode == "JPonly" && this.langService.lang == "JP") return true;
    return false;
  }
 
}
