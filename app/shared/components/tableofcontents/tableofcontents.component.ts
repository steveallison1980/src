import { Component, OnInit, Input } from '@angular/core';
import { IContent } from '../../../interfaces/icontent';
import { GuidanceService } from "../../../services/guidance.service";

@Component({
  selector: 'app-tableofcontents',
  templateUrl: './tableofcontents.component.html',
  styleUrls: ['./tableofcontents.component.css']
})
export class TableofcontentsComponent implements OnInit {

  @Input() content: IContent;
  bTOCDisplayed: boolean;

  constructor(
    private guidanceService: GuidanceService
  ) { }

  ngOnInit(): void {
    this.bTOCDisplayed = false;
  }

  showTOC(): void {
    this.guidanceService.bShowTOC = true;
  }
  hideTOC(): void {
    this.guidanceService.bShowTOC = false;
  }

  getContent(){
    return this.content;
  }
  getTooltip() {
    if( this.guidanceService.bShowTOC ){
      return "Click to hide table of contents";  
    } else {
      return "Click to show table of contents";
    }
  }
  TOCDisplayed(){
    return this.guidanceService.bShowTOC;
  }
}
