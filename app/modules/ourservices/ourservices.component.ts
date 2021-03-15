import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  curComponent: string = "patent";
  setComponent(component: string){
    this.curComponent = component;
    console.log(this.curComponent);
  }
  ourservicesitems: any = [
    {text:'Patents & Utility Models',icon:'lightbulb',index:0,component:'patent'},
    {text:'Designs & Trademarks',icon:'category',index:1,component:'design'},
    {text:'Litigation & Strategy',icon:'gavel',index:2,component:'litigation'},
    {text:'Court Decision Reports',icon:'menu_book',index:3,component:'court'}];
}
