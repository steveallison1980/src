import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { ACCESS, ACCESSJP, ACCESSTITLE, ACCESSTITLEJP } from '../../../../assets/data/staticabout';

@Component({
  selector: 'app-officecard',
  templateUrl: './officecard.component.html',
  styleUrls: ['./officecard.component.css']
})
export class OfficecardComponent implements OnInit {

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
        return ACCESSTITLEJP;
      case "EN":
      default:
        return ACCESSTITLE;
    }
  }

  getParas(){
    switch(this.langService.lang){
      case "JP":
        return ACCESSJP;
      case "EN":
      default:
        return ACCESS;
    }
  }

}
