import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { CAFCDEC, CAFCDECJP, CAFCDECTITLE, CAFCDECTITLEJP, JAPANDEC, JAPANDECJP, JAPANDECTITLE, JAPANDECTITLEJP } from '../../../../assets/data/staticservices';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-courtcasereports',
  templateUrl: './courtcasereports.component.html',
  styleUrls: ['./courtcasereports.component.css']
})
export class CourtcasereportsComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getCAFCDecTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP":
          text = CAFCDECTITLEJP;
          break;
      case "EN":
      default:
          text = CAFCDECTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text
    }
    return ret;
  }  

  getJapanDecTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP":
          text = JAPANDECTITLEJP;
          break;
      case "EN":
      default:
          text = JAPANDECTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text
    }
    return ret;
  }

  getCAFCDecParas(){
    switch(this.langService.lang){
      case "JP":
        return CAFCDECJP;
      case "EN":
      default:
        return CAFCDEC;
    }
  }
  
  getJapanDecParas(){
    switch(this.langService.lang){
      case "JP":
        return JAPANDECJP;
      case "EN":
      default:
        return JAPANDEC;
    }
  }

}
