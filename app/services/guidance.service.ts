import { Injectable } from '@angular/core';
import { DESIGNGUIDANCECONTENT } from "../../assets/data/staticguidancedesign"
import { PATENTGUIDANCECONTENT } from "../../assets/data/staticguidancepatent"
import { TRADEMARKGUIDANCECONTENT } from "../../assets/data/staticguidancetrademark"

@Injectable({
  providedIn: 'root'
})
export class GuidanceService {

  public bShowTOC = false;

  constructor() { }

  getContent(page){
    if( page == "patent") return PATENTGUIDANCECONTENT;
    if( page == "design") return DESIGNGUIDANCECONTENT;
    if( page == "trademark") return TRADEMARKGUIDANCECONTENT;
  }
}
