import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { KEYFEATURES, KEYFEATURESJP, KEYFEATURESTITLE, KEYFEATURESTITLEJP } from '../../../../assets/data/staticabout';

@Component({
  selector: 'app-keyfeatures',
  templateUrl: './keyfeatures.component.html',
  styleUrls: ['./keyfeatures.component.css']
})
export class KeyfeaturesComponent implements OnInit {

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
        return KEYFEATURESTITLEJP;
      case "EN":
      default:
        return KEYFEATURESTITLE;
    }
  }

  getParas(){
    switch(this.langService.lang){
      case "JP":
        return KEYFEATURESJP;
      case "EN":
      default:
        return KEYFEATURES;
    }
  }
}
