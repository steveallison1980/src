import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SitemapComponent } from './../sitemap/sitemap.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

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
}
