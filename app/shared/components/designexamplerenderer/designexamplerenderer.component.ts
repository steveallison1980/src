import { Component, OnInit, Input } from '@angular/core';
import { IDesignExample } from './../../../interfaces/icontent';

@Component({
  selector: 'app-designexamplerenderer',
  templateUrl: './designexamplerenderer.component.html',
  styleUrls: ['./designexamplerenderer.component.css']
})
export class DesignexamplerendererComponent implements OnInit {

  @Input() design: IDesignExample;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;
  @Input() guide: string;

  constructor() { }

  ngOnInit(): void {
  }
  getRegno(){
    return this.design.regno;
  }
  getTitle(){
    return this.design.title;
  }
  getApplicant(){
    return this.design.applicant;
  }
  getImages(){
    return this.design.images;
  }
  hasShort(){
    return this.design.shortdesc != "";
  }
  getShort(){
    return this.design.shortdesc;
  }
  hasDescription(){
    return this.design.description != null;
  }
  getDescription(){
    return this.design.description;
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
