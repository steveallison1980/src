import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { PATENTUTIL, PATENTUTILJP, PATENTUTILTITLE, PATENTUTILTITLEJP} from '../../../../assets/data/staticservices';
import { CHECKOUTPATENTGUIDE } from '../../../../assets/data/staticguidancepatent';

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
    switch(this.langService.lang){
      case "JP":
        return PATENTUTILTITLEJP;
      case "EN":
      default:
        return PATENTUTILTITLE;
    }
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
