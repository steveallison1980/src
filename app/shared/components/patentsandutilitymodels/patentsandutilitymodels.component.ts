import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { PATENTUTIL, PATENTUTILJP, PATENTUTILTITLE, PATENTUTILTITLEJP} from '../../../../assets/data/staticservices';
import { CHECKOUTPATENTGUIDE } from '../../../../assets/data/staticguidancepatent';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-patentsandutilitymodels',
  templateUrl: './patentsandutilitymodels.component.html',
  styleUrls: ['./patentsandutilitymodels.component.css']
})
export class PatentsandutilitymodelsComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  toggleLang(){
    console.log();
    this.langService.toggle();
  }

  getTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP":
        text = PATENTUTILTITLEJP;
        break;
      case "EN":
      default:
        text = PATENTUTILTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getParas(){
    switch(this.langService.lang){
      case "JP":
        return PATENTUTILJP;
      case "EN":
      default:
        return PATENTUTIL;
    }
  }
  isEnglish(){
    return (this.langService.lang == "EN");
  }
  getCheckOutPatentGuide(){
    return CHECKOUTPATENTGUIDE;
  }
}
