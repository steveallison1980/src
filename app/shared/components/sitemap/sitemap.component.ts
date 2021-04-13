import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  @Output() itemClick = new EventEmitter<string>();

  constructor(
    private bottomsheet: MatBottomSheetRef<SitemapComponent>,
    public nav: NavigateService) { }

  ngOnInit(): void {
  }
  
  //really this should be external and shared with sidebar
  homelinks: any = [
    {text:'Welcome Message',icon:'local_florist',subPage:'welcomemessage'},
    {text:'What\'s New',icon:'announcement',subPage:'news'},
    {text:'Contact Information',icon:'call',subPage:'contact'},
    {text:'Access',icon:'location_on',subPage:'access'}];
  aboutuslinks: any = [
    {text:'About the Firm',icon:'people',subPage:'about'},
    {text:'An Overview',icon:'menu_book',subPage:'overview'},
    {text:'Key Features',icon:'format_list_bulleted',subPage:'keyfeatures'}];
  ourserviceslinks: any = [
    {text:'Patents & Utility Models',icon:'lightbulb',subPage:'patent'},
    {text:'Designs & Trademarks',icon:'category',subPage:'design'},
    {text:'Litigation & Strategy',icon:'gavel',subPage:'litigation'},
    {text:'Court Decision Reports',icon:'menu_book',subPage:'court'}];
  professionalslinks: any = [
    {text:'Practice Areas',textJP:'専門分野別',icon:'manage_search',subPage:'practiceareas'},
    {text:'Information Processing',textJP:'情報処理系',icon:'computer',subPage:'infoproc_people'},
    {text:'Communications',textJP:'通信技術系',icon:'settings_input_antenna',subPage:'comm_people'},
    {text:'Electronics',textJP:'半導体・電気回路系',icon:'cable',subPage:'semicon_people'},
    {text:'Mechanical',textJP:'機械系',icon:'miscellaneous_services',subPage:'mech_people'},
    {text:'Designs',textJP:'意匠',icon:'category',subPage:'design_people'},
    {text:'Medical Devices',textJP:'医療機器',icon:'biotech',subPage:'meddev_people'},
    {text:'Chem, Pharma & Biotech',textJP:'化学・医薬・バイオ',icon:'science',subPage:'science_people',type:'sub-group'},
    {text:'Toys and Games',textJP:'アミューズメント・ゲーム',icon:'videogame_asset',subPage:'games_people'},
    {text:'Litigation',textJP:'訴訟・訴訟支援',icon:'gavel',subPage:'litigation_people'},
    {text:'Patent Attorneys',textJP:'弁理士',icon:'person',subPage:'patentattorneys'},
    {text:'Legal/Technical Advisors',textJP:'法律顧問・技術顧問',icon:'person_outline',subPage:'advisors'},
    {text:'Patent Engineers',textJP:'特許技術スタッフ',icon:'person',subPage:'patentengineers'},
    {text:'International Support',textJP:'技術・海外支援',icon:'person_outline',subPage:'internationalsupport'}];

  openLink(curPage, subPage) {
    console.log(subPage)
    this.nav.curPage = curPage;
    this.nav.subPage = subPage;
    this.nav.view = "group";
    this.bottomsheet.dismiss();
  }
}
