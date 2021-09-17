import { Component, OnInit, Input } from '@angular/core';
import { IAccordion, IExpansionPanel } from './../../../interfaces/icontent';
import { GuidanceService } from "../../../services/guidance.service";

@Component({
  selector: 'app-expansionrenderer',
  templateUrl: './expansionrenderer.component.html',
  styleUrls: ['./expansionrenderer.component.css']
})
export class ExpansionrendererComponent implements OnInit {

  @Input() accordion: IAccordion;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;
  @Input() guide: string;

  panelOpenState = false;

  constructor(
    private guidanceService: GuidanceService
  ) { }

  ngOnInit(): void {
  }

  getAccordion(){
    return this.accordion;
  }
  getPanels(){
    return this.accordion.panels;
  }
  getPanelDescription(panel:IExpansionPanel){
    return panel.description;
  }
  getPanelTitle(panel:IExpansionPanel){
    return panel.title;
  }
  getPanelContent(panel:IExpansionPanel){
    return panel.content;
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
    if(this.guide === undefined) this.guide="patent";
    return this.guide;
  }
  clickTOCButton(treelevel,index){
    let el = document.getElementById("jump"+treelevel+"-"+index);
    el.scrollIntoView();
    this.guidanceService.bShowTOC = false;
  }
  getTOCLink(){
    return "/guidance/"+this.getGuide();
  }
  getTOCFragment(i){
    return "jump"+this.getTreeLevel()+"-"+i;
  }
}
