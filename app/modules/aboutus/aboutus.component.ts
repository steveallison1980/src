import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  curComponent: string = "about";
  setComponent(component: string){
    this.curComponent = component;
    console.log(this.curComponent);
  }
  aboutusitems: any = [{text:'About Us',textJP:'当事務所について',icon:'people',index:0,component:'about'},
    {text:'An Overview',icon:'menu_book',textJP:'事務所概要',index:1,component:'overview'},
    {text:'Key Features',textJP:'特色',icon:'format_list_bulleted',index:2,component:'keyfeatures'},
    {text:'Access',textJP:'アクセス',icon:'location_on',index:3,component:'access'}];
}
