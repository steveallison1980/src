import { Injectable } from '@angular/core';
import { DESIGNGUIDANCECONTENT } from "../../assets/data/staticguidancedesign"

@Injectable({
  providedIn: 'root'
})
export class GuidanceService {

  constructor() { }

  getContent(){
    return DESIGNGUIDANCECONTENT;
  }
}
