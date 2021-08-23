import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { DESIGN, DESIGNJP, DESIGNTITLE, DESIGNTITLEJP, DESIGNTRADETITLE, DESIGNTRADETITLEJP, TRADE, TRADEJP, TRADETITLE, TRADETITLEJP } from '../../../../assets/data/staticservices';
import { CHECKOUTDESIGNGUIDE } from '../../../../assets/data/staticguidancedesign';
import { CHECKOUTTMGUIDE } from '../../../../assets/data/staticguidancetrademark';

@Component({
  selector: 'app-designsandtrademarks',
  templateUrl: './designsandtrademarks.component.html',
  styleUrls: ['./designsandtrademarks.component.css']
})
export class DesignsandtrademarksComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getTitle(){
    switch(this.langService.lang){
      case "JP":
        return DESIGNTRADETITLEJP;
      case "EN":
      default:
        return DESIGNTRADETITLE;
    }
  }

  getDesignTitle(){
    switch(this.langService.lang){
      case "JP":
        return DESIGNTITLEJP;
      case "EN":
      default:
        return DESIGNTITLE;
    }
  }

  getTrademarkTitle(){
    switch(this.langService.lang){
      case "JP":
        return TRADETITLEJP;
      case "EN":
      default:
        return TRADETITLE;
    }
  }

  getDesignParas(){
    switch(this.langService.lang){
      case "JP":
        return DESIGNJP;
      case "EN":
      default:
        return DESIGN;
    }
  }

  getTrademarkParas(){
    switch(this.langService.lang){
      case "JP":
        return TRADEJP;
      case "EN":
      default:
        return TRADE;
    }
  }
  isEnglish(){
    return (this.langService.lang == "EN");
  }
  getCheckOutDesignGuide(){
    return CHECKOUTDESIGNGUIDE;
  }
  getCheckOutTMGuide(){
    return CHECKOUTTMGUIDE;
  }
}
