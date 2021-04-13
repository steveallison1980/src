import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { CAFCDEC, CAFCDECJP, CAFCDECTITLE, CAFCDECTITLEJP, JAPANDEC, JAPANDECJP, JAPANDECTITLE, JAPANDECTITLEJP } from '../../../../assets/data/staticservices';

@Component({
  selector: 'app-courtcasereports',
  templateUrl: './courtcasereports.component.html',
  styleUrls: ['./courtcasereports.component.css']
})
export class CourtcasereportsComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getCAFCDecTitle(){
    switch(this.langService.lang){
      case "JP":
        return CAFCDECTITLEJP;
      case "EN":
      default:
        return CAFCDECTITLE;
    }
  }

  getJapanDecTitle(){
    switch(this.langService.lang){
      case "JP":
        return JAPANDECTITLEJP;
      case "EN":
      default:
        return JAPANDECTITLE;
    }
  }

  getCAFCDecParas(){
    switch(this.langService.lang){
      case "JP":
        return CAFCDECJP;
      case "EN":
      default:
        return CAFCDEC;
    }
  }
  
  getJapanDecParas(){
    switch(this.langService.lang){
      case "JP":
        return JAPANDECJP;
      case "EN":
      default:
        return JAPANDEC;
    }
  }

}
