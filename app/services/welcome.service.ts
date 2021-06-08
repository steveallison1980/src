import { Injectable } from '@angular/core';
import { WELCOMECONTENTJP, WELCOMECONTENT, WELCOMETITLEJP, WELCOMETITLE, WELCOMEIMG } from '../../assets/data/staticwelcome';
import { LanguagesettingService } from './languagesetting.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private langService: LanguagesettingService) { }

  getTitle(): string {
    switch(this.langService.lang){
      case "JP":
        return WELCOMETITLEJP;
      case "EN":
      default:
        return WELCOMETITLE;
    }
  }

  getContent(){
    switch(this.langService.lang){
      case "JP":
        return WELCOMECONTENTJP;
      case "EN":
      default:
        return WELCOMECONTENT;
    }
  }

  getImage(){
    return WELCOMEIMG;
  }
}
