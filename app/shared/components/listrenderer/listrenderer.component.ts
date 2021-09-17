import { Component, OnInit, Input } from '@angular/core';
import { IList } from './../../../interfaces/icontent';

@Component({
  selector: 'app-listrenderer',
  templateUrl: './listrenderer.component.html',
  styleUrls: ['./listrenderer.component.css']
})
export class ListrendererComponent implements OnInit {

  constructor() { }

  @Input() list: IList;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;
  @Input() guide: string;

  ngOnInit(): void {
  }
  getType(){
    return this.list.type;
  }
  getElements(){
    return this.list.elements;
  }
  getTreeMode(){
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
