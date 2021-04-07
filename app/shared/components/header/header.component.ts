import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SitemapComponent } from './../sitemap/sitemap.component';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, 
    private langService: LanguagesettingService,
    public nav: NavigateService) { 
      this.nav.curPage = "home";
    }

  ngOnInit(): void {
  }

  public openSitemap(){
      this._bottomSheet.open(SitemapComponent);
  }

  public clickHome(){
    this.nav.curPage = "home";
  }
  public clickAboutus(){
    this.nav.curPage = "aboutus";
  }
  public clickProfessionals(){
    this.nav.curPage = "professionals";
  }
  public clickOurservices(){
    this.nav.curPage = "ourservices";
  }
  public clickCareers(){
    this.nav.curPage = "careers";
  }

  getText(item){
    switch(item){
      case "firmname_pc":
        if( this.langService.lang == "EN" ){
          return "OHTSUKA PATENT OFFICE, P.C.";
        } else {
          return "大塚国際特許事務所";
        }
      case "firmname_mobile_ltmd":
        if( this.langService.lang == "EN" ){
          return "OHTSUKA PATENT OFFICE, P.C.";
        } else {
          return "大塚国際特許事務所";
        }
      case "firmname_mobile_xs":
        if( this.langService.lang == "EN" ){
          return "OHTSUKA PATENT OFFICE";
        } else {
          return "大塚国際特許事務所";
        }
      case "home":
        if( this.langService.lang == "EN" ){
          return "Home";
        } else {
          return "ホーム";
        }
      case "aboutus":
        if( this.langService.lang == "EN" ){
          return "About Us";
        } else {
          return "当事務所について";
        }
      case "ourservices":
        if( this.langService.lang == "EN" ){
          return "Our Services";
        } else {
          return "業務案内";
        }
      case "professionals":
        if( this.langService.lang == "EN" ){
          return "Professionals";
        } else {
          return "メンバー";
        }
      case "careers":
        if( this.langService.lang == "EN" ){
          return "Careers";
        } else {
          return "採用情報";
        }
      default:
        return "";
    }   
  }
}
