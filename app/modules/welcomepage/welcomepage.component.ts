import { Component, OnInit } from '@angular/core';
import { WELCOMECONTENTJP, WELCOMECONTENT, WELCOMETITLEJP, WELCOMETITLE, WELCOMEIMG } from '../../../assets/data/staticwelcome';
import { LanguagesettingService } from '../../services/languagesetting.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private langService: LanguagesettingService) {
   }

  ngOnInit(): void {
  }

  getTitle(){
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
