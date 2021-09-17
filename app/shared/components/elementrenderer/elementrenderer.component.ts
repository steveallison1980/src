import { Component, OnInit, Input } from '@angular/core';
import { IElement } from './../../../interfaces/icontent';

@Component({
  selector: 'app-elementrenderer',
  templateUrl: './elementrenderer.component.html',
  styleUrls: ['./elementrenderer.component.css']
})
export class ElementrendererComponent implements OnInit {

  constructor() { }

  @Input() element: IElement;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;
  @Input() guide: string;

  ngOnInit(): void {
  }

  getType(){
    return this.element.type;
  }
  getObj(){
    return this.element.objs[0];
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
