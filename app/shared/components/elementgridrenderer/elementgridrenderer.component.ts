import { Component, OnInit, Input } from '@angular/core';
import { IElementGrid } from './../../../interfaces/icontent';

@Component({
  selector: 'app-elementgridrenderer',
  templateUrl: './elementgridrenderer.component.html',
  styleUrls: ['./elementgridrenderer.component.css']
})
export class ElementgridrendererComponent implements OnInit {

  @Input() grid: IElementGrid;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;

  constructor() { }

  ngOnInit(): void {
  }

  getElements(){
    return this.grid.elements;
  }
  getGap(){
    return this.grid.gap;
  }
  getPercent(){
    return this.grid.percent;
  }
  getTreeMode(){
    if(this.bTreeMode === undefined) this.bTreeMode=false;
    return this.bTreeMode;
  }
  getTreeLevel(){
    if(this.treeLevel === undefined) this.treeLevel=0;
    return this.treeLevel;
  }
}
