import { Component, OnInit, Input } from '@angular/core';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-titletext',
  templateUrl: './titletext.component.html',
  styleUrls: ['./titletext.component.css']
})
export class TitletextComponent implements OnInit {

  @Input() title: ITitle;
  @Input() title2: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTitleText (){
    return this.title.text;
  }
  getTitleText2 (){
    return this.title2;
  }
  isLarge(){
    return this.title.class == "largetext";
  }
}
