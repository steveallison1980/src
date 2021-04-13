import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { LITIGATION, LITIGATIONJP, LITIGATIONTITLE, LITIGATIONTITLEJP, LITSTRATSEARCHTITLE, LITSTRATSEARCHTITLEJP, PATSEARCH, PATSEARCHJP, PATSEARCHTITLE, PATSEARCHTITLEJP, PATSTRAT, PATSTRATJP, PATSTRATTITLE, PATSTRATTITLEJP } from '../../../../assets/data/staticservices';

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
    switch(this.langService.lang){
      case "JP":
        return LITIGATIONTITLEJP;
      case "EN":
      default:
        return LITIGATIONTITLE;
    }
  }
  
  getPatStratTitle(){
    switch(this.langService.lang){
      case "JP":
        return PATSTRATTITLEJP;
      case "EN":
      default:
        return PATSTRATTITLE;
    }
  }

  getPatSearchTitle(){
    switch(this.langService.lang){
      case "JP":
        return PATSEARCHTITLEJP;
      case "EN":
      default:
        return PATSEARCHTITLE;
    }
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