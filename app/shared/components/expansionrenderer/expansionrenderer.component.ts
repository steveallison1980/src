import { Component, OnInit, Input } from '@angular/core';
import { IAccordion, IExpansionPanel } from './../../../interfaces/icontent';

@Component({
  selector: 'app-expansionrenderer',
  templateUrl: './expansionrenderer.component.html',
  styleUrls: ['./expansionrenderer.component.css']
})
export class ExpansionrendererComponent implements OnInit {

  @Input() accordion: IAccordion;
  
  panelOpenState = false;

  constructor() { }

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
    console.log(panel.title)
    return panel.title;
  }
  getPanelContent(panel:IExpansionPanel){
    return panel.content;
  }
}
