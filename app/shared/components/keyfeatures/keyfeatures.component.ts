import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { KEYFEATURESTITLE, KEYFEATURESTITLEJP, RIGHT, RIGHTJP, RIGHTTITLE, RIGHTTITLEJP, GLOBALTEXT, GLOBALTEXTJP, GLOBALTITLE, GLOBALTITLEJP, LITIGATION, LITIGATIONJP, LITIGATIONTITLE, LITIGATIONTITLEJP, DEVELOP, DEVELOPJP, DEVELOPTITLE, DEVELOPTITLEJP, SUPPORT, SUPPORTJP, SUPPORTTITLE, SUPPORTTITLEJP} from '../../../../assets/data/staticabout';

@Component({
  selector: 'app-keyfeatures',
  templateUrl: './keyfeatures.component.html',
  styleUrls: ['./keyfeatures.component.css']
})
export class KeyfeaturesComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getTitle(){
    switch(this.langService.lang){
      case "JP":
        return KEYFEATURESTITLEJP;
      case "EN":
      default:
        return KEYFEATURESTITLE;
    }
  }

  getRightTitle(){
    switch(this.langService.lang){
      case "JP":
        return RIGHTTITLEJP;
      case "EN":
      default:
        return RIGHTTITLE;
    }
  }

  getGlobalTitle(){
    switch(this.langService.lang){
      case "JP":
        return GLOBALTITLEJP;
      case "EN":
      default:
        return GLOBALTITLE;
    }
  }

  getLitigationTitle(){
    switch(this.langService.lang){
      case "JP":
        return LITIGATIONTITLEJP;
      case "EN":
      default:
        return LITIGATIONTITLE;
    }
  }

  getDevelopTitle(){
    switch(this.langService.lang){
      case "JP":
        return DEVELOPTITLEJP;
      case "EN":
      default:
        return DEVELOPTITLE;
    }
  }

  getSupportTitle(){
    switch(this.langService.lang){
      case "JP":
        return SUPPORTTITLEJP;
      case "EN":
      default:
        return SUPPORTTITLE;
    }
  }

  getRightParas(){
    switch(this.langService.lang){
      case "JP":
        return RIGHTJP;
      case "EN":
      default:
        return RIGHT;
    }
  }

  getGlobalParas(){
    switch(this.langService.lang){
      case "JP":
        return GLOBALTEXTJP;
      case "EN":
      default:
        return GLOBALTEXT;
    }
  }

  getLitigationParas(){
    switch(this.langService.lang){
      case "JP":
        return LITIGATIONJP;
      case "EN":
      default:
        return LITIGATION;
    }
  }

  getDevelopParas(){
    switch(this.langService.lang){
      case "JP":
        return DEVELOPJP;
      case "EN":
      default:
        return DEVELOP;
    }
  }

  getSupportParas(){
    switch(this.langService.lang){
      case "JP":
        return SUPPORTJP;
      case "EN":
      default:
        return SUPPORT;
    }
  }
}
