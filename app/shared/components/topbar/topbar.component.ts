import { Component, OnInit, Input } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';
import { CONTACTTITLE, CONTACTTITLEJP} from '../../../../assets/data/staticcontact';
import { SITEMAP_DATA } from '../../../../assets/data/staticnav';
import { SitemapComponent } from './../sitemap/sitemap.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() highlight: string;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private langService: LanguagesettingService,
    public nav: NavigateService) {}

  ngOnInit(): void {
  }

  public openSitemap() {
    window.scroll(0, 0);
    this._bottomSheet.open(SitemapComponent);
  }
  getMenuToolTip(){
    return "menu";
  } 

  clickContact(){
    this.nav.curPage = "home";
    this.nav.subPage = "contact";
  }
  toggleLang(){
    console.log(this.langService.lang)
    this.langService.toggle();
    console.log(this.langService.lang)
  }
  getImgSrc(){
    if( this.langService.lang == "JP" ){
      return "../../../../assets/img/en.png";
    } else {
      return "../../../../assets/img/jp.png";
    }
  }
  getLang(){
    return this.langService.lang == "JP";
  }
  getContactText(){
    switch(this.langService.lang){
      case "JP":
        return CONTACTTITLEJP;
      case "EN":
      default:
        return CONTACTTITLE;
    }
  }

  isSplashPage(){
    if( this.highlight == "/") return true;
    if( this.highlight == "/home") return true;
    if( this.highlight == "/home/en") return true;
    if( this.highlight == "/home/jp") return true;
    return false;
  }

  findInNav(needle){
    for(let i in SITEMAP_DATA.pages){
      if (SITEMAP_DATA.pages[i].mainpage == needle ){
        for(let j in SITEMAP_DATA.pages[i].links){
          if(SITEMAP_DATA.pages[i].links[j].routerlink == this.highlight) return true;
        }
      }
    }
    return false;
  }
}
