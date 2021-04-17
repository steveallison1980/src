import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

  getSubPage(){
    return this.nav.subPage;
  }
  isAbout(){
    return (this.nav.subPage == "about");
  }
  isOverview(){
    return (this.nav.subPage == "overview");
  }
  isKeyfeatures(){
    return (this.nav.subPage == "keyfeatures");
  }
  isContact(){
    return (this.nav.subPage == "contact");
  }

  aboutusitems: any = [{text:'About Us',textJP:'当事務所について',icon:'people',index:0,component:'about'},
    {text:'An Overview',icon:'menu_book',textJP:'事務所概要',index:1,component:'overview'},
    {text:'Key Features',textJP:'特色',icon:'format_list_bulleted',index:2,component:'keyfeatures'},
    {text:'Contact/Access',textJP:'アクセス',icon:'location_on',index:3,component:'contact'}];
}
