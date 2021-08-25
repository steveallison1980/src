import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { CAREERCONTACT, CAREERCONTACTJP, CAREERTITLE, CAREERTITLEJP, PATENTATTANDENG,PATENTATTANDENGJP, PATENTATTANDENGTITLE, PATENTATTANDENGTITLEJP, JOBOUTLINETITLE, JOBOUTLINETITLEJP, JOBOUTLINEPATANDENG, JOBOUTLINEPATANDENGJP, JOBOUTLINETRANSLATION, JOBOUTLINETRANSLATIONJP, TRANSLATION, TRANSLATIONJP, TRANSLATIONTITLE, TRANSLATIONTITLEJP, SELECTION, SELECTIONJP, SELECTIONTITLE, SELECTIONTITLEJP} from '../../../../assets/data/staticcareers';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getTitle(){
    var text="";
    switch(this.langService.lang){
      case "JP":
          text = CAREERTITLEJP;
          break;
      case "EN":
      default:
          text = CAREERTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text
    }
    return ret;
  }

  getPatandEngTitle(){
    switch(this.langService.lang){
      case "JP":
        return PATENTATTANDENGTITLEJP;
      case "EN":
      default:
        return PATENTATTANDENGTITLE;
    }
  }
  getPatandEngParas(){
    switch(this.langService.lang){
      case "JP":
        return PATENTATTANDENGJP;
      case "EN":
      default:
        return PATENTATTANDENG;
    }
  }

  getJobOutlineTitle(){
    switch(this.langService.lang){
      case "JP":
        return JOBOUTLINETITLEJP;
      case "EN":
      default:
        return JOBOUTLINETITLE;
    }
  }
  getJobOutlinePatandEngParas(){
    switch(this.langService.lang){
      case "JP":
        return JOBOUTLINEPATANDENGJP;
      case "EN":
      default:
        return JOBOUTLINEPATANDENG;
    }
  }

  getTranslationTitle(){
    switch(this.langService.lang){
      case "JP":
        return TRANSLATIONTITLEJP;
      case "EN":
      default:
        return TRANSLATIONTITLE;
    }
  }
  getTranslationParas(){
    switch(this.langService.lang){
      case "JP":
        return TRANSLATIONJP;
      case "EN":
      default:
        return TRANSLATION;
    }
  }
  getCareerContactParas(){
    switch(this.langService.lang){
      case "JP":
        return CAREERCONTACTJP;
      case "EN":
      default:
        return CAREERCONTACT;
    }
  }

  getSelectionTitle(){
    switch(this.langService.lang){
      case "JP":
        return SELECTIONTITLEJP;
      case "EN":
      default:
        return SELECTIONTITLE;
    }
  }
  getSelectionParas(){
    switch(this.langService.lang){
      case "JP":
        return SELECTIONJP;
      case "EN":
      default:
        return SELECTION;
    }
  }


}