import { Component, OnInit, Input } from '@angular/core';
import { GuidanceService } from "../../../services/guidance.service";
import { PATENTGUIDANCECONTENT } from "../../../../assets/data/staticguidancepatent"
import { DESIGNGUIDANCECONTENT } from "../../../../assets/data/staticguidancedesign"
import { TRADEMARKGUIDANCECONTENT } from "../../../../assets/data/staticguidancetrademark"

@Component({
  selector: 'app-tableofcontents',
  templateUrl: './tableofcontents.component.html',
  styleUrls: ['./tableofcontents.component.css']
})
export class TableofcontentsComponent implements OnInit {

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

  getPatentContent(){
    return PATENTGUIDANCECONTENT;
  }
  getTrademarkContent(){
    return TRADEMARKGUIDANCECONTENT;
  }
  getDesignContent(){
    return DESIGNGUIDANCECONTENT;
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
