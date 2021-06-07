import { Component, OnInit, Input } from '@angular/core';
import { IContent } from './../../../interfaces/icontent';

@Component({
  selector: 'app-cardrenderer',
  templateUrl: './cardrenderer.component.html',
  styleUrls: ['./cardrenderer.component.css']
})
export class CardrendererComponent implements OnInit {

  @Input() content: IContent;
  @Input() imgfilepath: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  getImgFilePath(){
    return this.imgfilepath;
  }
  getTitle(){
    return this.title;
  }
  getContent(){
    return this.content;
  }
}
