import { Component, OnInit, Input } from '@angular/core';
import { IHeader } from './../../../interfaces/icontent';
import { GuidanceService } from "../../../services/guidance.service";

@Component({
  selector: 'app-headerrenderer',
  templateUrl: './headerrenderer.component.html',
  styleUrls: ['./headerrenderer.component.css']
})
export class HeaderrendererComponent implements OnInit {
  
  @Input() header: IHeader;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;

  constructor(
    private guidanceService: GuidanceService
  ) { }

  ngOnInit(): void {
  }

  getHeaderText(){
    var ret: string = "";
    if( this.header.classes != null && this.header.classes.includes("bullet") ){
      ret = "● ";
    }
    return ret + this.header.text;
  }
  getHeaderType(){
    return this.header.type;
  }
  getTreeMode(){
    return this.bTreeMode;
  }
  getLevelFiller(){
    
    var treelevel = this.getTreeLevel();
    switch( treelevel){
      case 0:
        return [];
      case 1:
        return [0];
      case 2:
        return [0,0];
      case 3:
        return [0,0,0];
      default:
        return [0,0,0,0];
    }
  }
  getTreeLevel(){
    if(this.treeLevel === undefined) this.treeLevel=0;
    return this.treeLevel;
  }
  makeButton(){
    if( this.getTreeLevel()>0 && this.getHeaderText().length>1 ) return true;
    return false;
  }
  getId(){
    return this.header.id;
  }
  clickTOCButton(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var id = "jump"+target.id;
    let el = document.getElementById(id);
    el.scrollIntoView();
    this.guidanceService.bShowTOC = false;
  }
  getStrippedText(){
    return this.getHeaderText().replace(/\s/g, "");
  }
}