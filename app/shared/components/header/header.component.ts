import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatTooltip } from '@angular/material/tooltip';
import { SitemapComponent } from './../sitemap/sitemap.component';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';
import { SITEMAP_DATA } from '../../../../assets/data/staticnav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() highlight: string;
  @ViewChild('tooltip') manualTooltip: MatTooltip;
  
  constructor(private _bottomSheet: MatBottomSheet,
    private langService: LanguagesettingService,
    public nav: NavigateService) {
    this.nav.curPage = "home";
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if( window.innerWidth >= 960 ) this.showTooltip();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.hideTooltip();
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
    this.hideTooltip();
    if(verticalOffset == 0 &&  window.innerWidth >= 960){
      this.showTooltip();
    }
  }

  public showTooltip(){
    this.manualTooltip.show();
  }
  public hideTooltip(){
    this.manualTooltip.hide();
  }
  public openSitemap() {
    window.scroll(0, 0);
    this._bottomSheet.open(SitemapComponent);
  }

  public clickHome() {
    this.nav.curPage = "home";
    this.nav.subPage = "welcomemessage";
  }
  public clickAboutus() {
    this.nav.curPage = "aboutus";
    this.nav.subPage = "about";
  }
  public clickProfessionals() {
    this.nav.curPage = "professionals";
    this.nav.subPage = "pro-practiceareas";
  }
  public clickOurservices() {
    this.nav.curPage = "ourservices";
    this.nav.subPage = "patent";
  }
  public clickCAFCReports() {
    this.nav.curPage = "cafcreports";
    this.nav.subPage = "cafcall";
    this.nav.cafcfilter = "cafcall";
  }
  public clickCareers() {
    this.nav.curPage = "careers";
    this.nav.subPage = "careerspage";
  }
  public isEN(){
    return this.langService.lang == "EN";
  }

  getText(item) {
    switch (item) {
      case "firmname_pc":
        if (this.langService.lang == "EN") {
          return "OHTSUKA PATENT OFFICE, P.C.";
        } else {
          return "???????????????????????????";
        }
      case "firmname_mobile_ltmd":
        if (this.langService.lang == "EN") {
          return "OHTSUKA PATENT OFFICE, P.C.";
        } else {
          return "???????????????????????????";
        }
      case "firmname_mobile_xs":
        if (this.langService.lang == "EN") {
          return "OHTSUKA PATENT OFFICE";
        } else {
          return "???????????????????????????";
        }
      case "home":
        if (this.langService.lang == "EN") {
          return "Home";
        } else {
          return "?????????";
        }
      case "aboutus":
        if (this.langService.lang == "EN") {
          return "About Us";
        } else {
          return "????????????????????????";
        }
      case "ourservices":
        if (this.langService.lang == "EN") {
          return "Our Services";
        } else {
          return "????????????";
        }
      case "professionals":
        if (this.langService.lang == "EN") {
          return "Professionals";
        } else {
          return "????????????";
        }
      case "cafcreports":
        if (this.langService.lang == "JP") {
          //return "??????????????????????????????CAFC?????????"; //too long!
          return "CAFC??????";
        } 
      case "careers":
        if (this.langService.lang == "EN") {
          return "Careers";
        } else {
          return "????????????";
        }
      default:
        return "";
    }
  }

  isJapanesePage(){
    if (this.langService.lang == "EN") {
      return false;
    } else {
      return true;
    }
  }

  isSplashPage(){
    if( this.highlight == "/") return true;
    if( this.highlight == "/home") return true;
    if( this.highlight == "/home/en") return true;
    if( this.highlight == "/home/jp") return true;
    return false;
  }
  isHome(){
    if( this.highlight == "/") return true;
    if( this.highlight == "/home") return true;
    if( this.highlight == "/home/en") return true;
    if( this.highlight == "/home/jp") return true;
    if( this.highlight == "/welcomepage") return true;
    return this.findInNav("home");
  }
  isAboutus(){
    return this.findInNav("aboutus");
  }
  isOurservices(){
    return this.findInNav("ourservices")  || this.highlight.includes("publication");
  }
  isProfessionals(){
    return this.findInNav("professionals") || this.highlight.includes("professional");
  }
  isCafcreports(){
    return this.findInNav("cafcreports");
  }
  isCareers(){
    return this.findInNav("careers");
  }
  findInNav(needle){
    for(let i in SITEMAP_DATA.pages){
      if (SITEMAP_DATA.pages[i].mainpage == needle ){
        for(let j in SITEMAP_DATA.pages[i].links){
          if(SITEMAP_DATA.pages[i].links[j].routerlink == this.highlight) {
            return true;
          }
        }
      }
    }
    return false;
  }
  getMenuToolTip(){
    return "menu";
  }
  toggleLang(){
    this.langService.toggle();
  }
  getLangImgSrc(){
    var ret = "../../../../assets/" + this.langService.getImgSrc();
    return ret;
  }
  getLangToggleToolTip(){
    return this.langService.getToolTip();
  }
  getLangClass(lang){
    if (this.langService.lang == lang) {
      return "activelang";
    } else {
      return "inactivelang";
    }
  }
}

