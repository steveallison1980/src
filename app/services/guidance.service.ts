import { Injectable } from '@angular/core';
import { DESIGNGUIDANCECONTENT } from "../../assets/data/staticguidancedesign"
import { PATENTGUIDANCECONTENT } from "../../assets/data/staticguidancepatent"

@Injectable({
  providedIn: 'root'
})
export class GuidanceService {

  constructor() { }

  getContent(){
    // return DESIGNGUIDANCECONTENT;
    return PATENTGUIDANCECONTENT;
  }
}
