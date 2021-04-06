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
  ourservicesitems: any = [{text:'Patents & Utility Models',textJP:'特許・実用新案取得',icon:'lightbulb',index:0,component:'patent'},
    {text:'Designs & Trademarks',textJP:'意匠・商標登録',icon:'category',index:1,component:'design'},
    {text:'Litigation & Strategy',textJP:'訴訟・特許戦略・特許調査',icon:'gavel',index:2,component:'litigation'},
    {text:'Court Decision Reports',textJP:'判例紹介',icon:'menu_book',index:3,component:'court'}];
}
