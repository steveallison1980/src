import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
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

  constructor(private _bottomSheet: MatBottomSheet,
    private langService: LanguagesettingService,
    public nav: NavigateService) {
    this.nav.curPage = "home";
  }

  ngOnInit(): void {
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
          return "大塚国際特許事務所";
        }
      case "firmname_mobile_ltmd":
        if (this.langService.lang == "EN") {
          return "OHTSUKA PATENT OFFICE, P.C.";
        } else {
          return "大塚国際特許事務所";
        }
      case "firmname_mobile_xs":
        if (this.langService.lang == "EN") {
          return "OHTSUKA PATENT OFFICE";
        } else {
          return "大塚国際特許事務所";
        }
      case "home":
        if (this.langService.lang == "EN") {
          return "Home";
        } else {
          return "ホーム";
        }
      case "aboutus":
        if (this.langService.lang == "EN") {
          return "About Us";
        } else {
          return "当事務所について";
        }
      case "ourservices":
        if (this.langService.lang == "EN") {
          return "Our Services";
        } else {
          return "業務案内";
        }
      case "professionals":
        if (this.langService.lang == "EN") {
          return "Professionals";
        } else {
          return "メンバー";
        }
      case "cafcreports":
        if (this.langService.lang == "JP") {
          //return "米国連邦控訴裁判所（CAFC）判決"; //too long!
          return "CAFC判決";
        } 
      case "careers":
        if (this.langService.lang == "EN") {
          return "Careers";
        } else {
          return "採用情報";
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

  isHome(){
    if( this.highlight == "/") return true;
    return this.findInNav("home");
  }
  isAboutus(){
    return this.findInNav("aboutus");
  }
  isOurservices(){
    return this.findInNav("ourservices");
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
          if(SITEMAP_DATA.pages[i].links[j].routerlink == this.highlight) return true;
        }
      }
    }
    return false;
  }
}

