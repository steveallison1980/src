import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { ABOUTPOINTFORMTABLE, ABOUTPOINTFORMTABLEJP, ABOUTTITLEJP, ABOUTTITLE, ABOUTUSJP, ABOUTUS, ABOUTMAINSERVICESJP, ABOUTMAINSERVICES} from '../../../../assets/data/staticabout';
import { SIGNATURE, SIGNATUREJP} from '../../../../assets/data/staticall';
import { ITitle } from './../../../interfaces/icontent';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getTitle(){
    var titletext = "";
    switch(this.langService.lang){
      case "JP":
        titletext = ABOUTTITLEJP;
        break;
      case "EN":
      default:
        titletext = ABOUTTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: titletext
    }
    return ret;
  }


  getParas(){
    switch(this.langService.lang){
      case "JP":
        return ABOUTUSJP;
      case "EN":
      default:
        return ABOUTUS;
    }
  }
  getSignature(){
    switch(this.langService.lang){
      case "JP":
        return SIGNATUREJP;
      case "EN":
      default:
        return SIGNATURE;
    }
  }
  getPointFormTable(){
    switch(this.langService.lang){
      case "JP":
        return ABOUTPOINTFORMTABLEJP;
      case "EN":
      default:
          return ABOUTPOINTFORMTABLE;
    }
  }

  getMainServicesContent(){
    switch(this.langService.lang){
      case "JP":
        return ABOUTMAINSERVICESJP;
      case "EN":
      default:
          return ABOUTMAINSERVICES;
    }
  }
}
