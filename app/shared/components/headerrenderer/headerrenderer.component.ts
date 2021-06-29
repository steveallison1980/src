import { Component, OnInit, Input } from '@angular/core';
import { IHeader } from './../../../interfaces/icontent';
import { stringify } from 'querystring';

@Component({
  selector: 'app-headerrenderer',
  templateUrl: './headerrenderer.component.html',
  styleUrls: ['./headerrenderer.component.css']
})
export class HeaderrendererComponent implements OnInit {
  
  @Input() header: IHeader;

  constructor() { }

  ngOnInit(): void {
  }

  getHeaderText(){
    var ret: string = "";
    if(this.header.classes != null) console.log(this.header.classes)
    if( this.header.classes != null && this.header.classes.includes("bullet") ){
      ret = "● ";
    }
    return ret + this.header.text;
  }
  getHeaderType(){
    return this.header.type;
  }
}
