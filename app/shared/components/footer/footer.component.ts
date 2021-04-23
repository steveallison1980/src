import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SitemapComponent } from './../sitemap/sitemap.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }
  bottomSheetRef: MatBottomSheetRef;

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this.bottomSheetRef = this._bottomSheet.open(SitemapComponent);
  }
}
