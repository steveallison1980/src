import { Injectable } from '@angular/core';
import { DESIGNGUIDANCECONTENT } from "../../assets/data/staticguidancedesign"
import { PATENTGUIDANCECONTENT } from "../../assets/data/staticguidancepatent"
import { TRADEMARKGUIDANCECONTENT } from "../../assets/data/staticguidancetrademark"

@Injectable({
  providedIn: 'root'
})
export class GuidanceService {

  constructor() { }

  getContent(){
    // return DESIGNGUIDANCECONTENT;
    // return PATENTGUIDANCECONTENT;
    return TRADEMARKGUIDANCECONTENT;
  }
}
