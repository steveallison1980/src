import { Component, OnInit, Input } from '@angular/core';
import { IHeader } from './../../../interfaces/icontent';

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
    return this.header.text;
  }
  getHeaderType(){
    return this.header.type;
  }
}
