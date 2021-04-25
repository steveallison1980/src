import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SitemapComponent } from './../sitemap/sitemap.component';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet,
    public nav: NavigateService) { }
  bottomSheetRef: MatBottomSheetRef;

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this.bottomSheetRef = this._bottomSheet.open(SitemapComponent);
  }
  clickAccess(){
    this.nav.curPage="home";
    this.nav.subPage="access";
    window.scroll(0, 0);
  }
}
