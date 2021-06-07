import { Component, OnInit, Input } from '@angular/core';
import { IContent } from './../../../interfaces/icontent';

@Component({
  selector: 'app-contentrenderer',
  templateUrl: './contentrenderer.component.html',
  styleUrls: ['./contentrenderer.component.css']
})
export class ContentrendererComponent implements OnInit {

  constructor() { }
  
  @Input() content: IContent;

  ngOnInit(): void {
  }

  getElements(){
    return this.content.elements;
  }
}
