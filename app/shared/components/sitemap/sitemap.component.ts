import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NavigateService } from '../../../services/navigate.service';
import { SITEMAP_DATA } from '../../../../assets/data/staticnav';
import { ISitemap, ILink, IPage } from '../../../interfaces/isitemap';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  constructor(
    private bottomsheet: MatBottomSheetRef<SitemapComponent>,
    public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }
  
  //really this should be external and shared with sidebar
  sitemap: ISitemap = SITEMAP_DATA;
  
  openLink(curPage, subPage) {
    console.log(curPage)
    this.nav.curPage = curPage;
    this.nav.subPage = subPage;
    this.nav.view = "group";
    this.bottomsheet.dismiss();
  }

  getText(link: ILink){
    switch(this.langService.lang){
      case "JP":
        return link.textJP;
      case "EN":
      default:
        return link.text;
    }
  }
  getPageText(page: IPage){
    switch(this.langService.lang){
      case "JP":
        return page.textJP;
      case "EN":
      default:
        return page.text;
    }
  }

  isJapaneseSite() {
    return this.langService.lang == "JP";
  }

  getPages(){
    if( this.langService.lang == "JP") return SITEMAP_DATA.pages.filter(x => (x.displayMode == "" || x.displayMode == "JPonly"));
    if( this.langService.lang == "EN") return SITEMAP_DATA.pages.filter(x => (x.displayMode == "" || x.displayMode == "ENonly"));
  }
  getLinks(page){
    if( this.langService.lang == "JP") return page.links.filter(x => (x.displayMode == "both" || x.displayMode == "JPonly"));
    if( this.langService.lang == "EN") return page.links.filter(x => (x.displayMode == "both" || x.displayMode == "ENonly"));
  }

  isSplashPage(){
    console.log(this.nav.curPage)
    if( this.nav.curPage == "welcomepage" || this.nav.curPage=="home"){
      return true;
    } else {
      return false;
    }
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
  getLangToggleToolTip(){
    if( this.langService.lang == "JP" ){
      return "click to switch to English!";
    } else {
      return "日本語に切り替え";
    }
  }
}
