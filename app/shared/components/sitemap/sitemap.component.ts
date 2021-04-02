import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  @Output() itemClick = new EventEmitter<string>();

  constructor(
    private bottomsheet: MatBottomSheetRef<SitemapComponent>) { }

  ngOnInit(): void {
  }
  
  //really this should be external and shared with sidebar
  homelinks: any = [
    {text:'Welcome Message',icon:'local_florist',route:'welcomemessage'},
    {text:'What\'s New',icon:'announcement',route:'news'},
    {text:'Contact Information',icon:'call',route:'contact'},
    {text:'Access',icon:'location_on',route:'access'}];
  aboutuslinks: any = [
    {text:'Our Story',icon:'people',route:'/about'},
    {text:'An Overview',icon:'menu_book',route:'/overview'},
    {text:'Key Features',icon:'format_list_bulleted',route:'/keyfeatures'}];
  ourserviceslinks: any = [
    {text:'Patents & Utility Models',icon:'lightbulb',route:'/patentsandutilitymodels'},
    {text:'Designs & Trademarks',icon:'category',route:'/designsandtrademarks'},
    {text:'Litigation & Strategy',icon:'gavel',route:'/litigationandstrategy'},
    {text:'Court Decision Reports',icon:'menu_book',route:'/courtcasereports'}];

  openLink() {
    this.bottomsheet.dismiss();
    window.scroll(0, 0);
  }
}
