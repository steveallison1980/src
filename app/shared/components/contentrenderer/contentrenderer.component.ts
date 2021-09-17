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
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;
  @Input() guide: string;

  ngOnInit(): void {
  }

  getElements(){
    if (this.content == null) return null;
    return this.content.elements;
  }
  getTreeMode(){
    if(this.bTreeMode === undefined) this.bTreeMode=false;
    return this.bTreeMode;
  }
  getTreeLevel(){
    if(this.treeLevel === undefined) this.treeLevel=0;
    return this.treeLevel;
  }
  getGuide(){
    return this.guide;
  }
}
