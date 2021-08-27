import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { LITIGATION, LITIGATIONJP, LITIGATIONTITLE, LITIGATIONTITLEJP, LITSTRATSEARCHTITLE, LITSTRATSEARCHTITLEJP, PATSEARCH, PATSEARCHJP, PATSEARCHTITLE, PATSEARCHTITLEJP, PATSTRAT, PATSTRATJP, PATSTRATTITLE, PATSTRATTITLEJP } from '../../../../assets/data/staticservices';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-litigationandstrategy',
  templateUrl: './litigationandstrategy.component.html',
  styleUrls: ['./litigationandstrategy.component.css']
})
export class LitigationandstrategyComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getTitle(){
    switch(this.langService.lang){
      case "JP":
        return LITSTRATSEARCHTITLEJP;
      case "EN":
      default:
        return LITSTRATSEARCHTITLE;
    }
  }

  getLitTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP":
          text = LITIGATIONTITLEJP;
          break;
      case "EN":
      default:
          text = LITIGATIONTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }
  
  getPatStratTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP":
        text = PATSTRATTITLEJP;
        break;
      case "EN":
      default:
        text = PATSTRATTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getPatSearchTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP":
        text = PATSEARCHTITLEJP;
        break;
      case "EN":
      default:
        text = PATSEARCHTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getLitParas(){
    switch(this.langService.lang){
      case "JP":
        return LITIGATIONJP;
      case "EN":
      default:
        return LITIGATION;
    }
  }

  getPatStratParas(){
    switch(this.langService.lang){
      case "JP":
        return PATSTRATJP;
      case "EN":
      default:
        return PATSTRAT;
    }
  }
  getPatSearchParas(){
    switch(this.langService.lang){
      case "JP":
        return PATSEARCHJP;
      case "EN":
      default:
        return PATSEARCH;
    }
  }
}