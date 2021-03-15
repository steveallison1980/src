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
  aboutusitems: any = [{text:'About Us',icon:'people',index:0,component:'about'},
    {text:'An Overview',icon:'menu_book',index:1,component:'overview'},
    {text:'Key Features',icon:'format_list_bulleted',index:2,component:'keyfeatures'},
    {text:'Access',icon:'location_on',index:3,component:'access'}];
}
