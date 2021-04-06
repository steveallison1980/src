import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SitemapComponent } from './../sitemap/sitemap.component';
import { LanguagesettingService } from '../../../languagesetting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, 
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  public openSitemap(){
      this._bottomSheet.open(SitemapComponent);
  }
  curPage: string = "home";
  public clickHome(){
    this.curPage = "home";
  }
  public clickAboutus(){
    this.curPage = "aboutus";
  }
  public clickProfessionals(){
    this.curPage = "professionals";
  }
  public clickOurservices(){
    this.curPage = "ourservices";
  }
  public clickCareers(){
    this.curPage = "careers";
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
      default:
        return "";
    }   
  }
}
