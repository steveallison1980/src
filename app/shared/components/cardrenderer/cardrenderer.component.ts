import { Component, OnInit, Input } from '@angular/core';
import { IContent, ICard, ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-cardrenderer',
  templateUrl: './cardrenderer.component.html',
  styleUrls: ['./cardrenderer.component.css']
})
export class CardrendererComponent implements OnInit {

  @Input() content: IContent;
  @Input() imgfilepath: string;
  @Input() title: string;
  @Input() cardSettings: ICard;

  constructor() { }

  ngOnInit(): void {
  }

  getImgFilePath(){
    return this.imgfilepath;
  }
  getTitle(){
    var titleclass = "smalltext";
    if( this.getSize() == "large" ){
      titleclass = "largetext";
    }
    var ret: ITitle = {
      class: titleclass,
      text: this.title
    }
    return ret;
  }
  getContent(){
    return this.content;
  }
  getSize(){
    return this.cardSettings.size;
  }
  getBorder(){
    return this.cardSettings.border;
  }
  getClasses(){
    var ret = "";
    if( !this.getBorder ){
      ret = ret + " noborder"
    }
    return ret;
  }
}
