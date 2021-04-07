import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../languagesetting.service';
import { WELCOMEMESSAGE, WELCOMEMESSAGEJP, SIGNATURE, SIGNATUREJP } from '../../../../assets/data/staticdata';

@Component({
  selector: 'app-welcomemessage',
  templateUrl: './welcomemessage.component.html',
  styleUrls: ['./welcomemessage.component.css']
})
export class WelcomemessageComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  toggleLang(){
    console.log();
    this.langService.toggle();
  }

  getParas(){
    switch(this.langService.lang){
      case "JP":
        return WELCOMEMESSAGEJP;
      case "EN":
      default:
        return WELCOMEMESSAGE;
    }
  }
  getSignature(){
    switch(this.langService.lang){
      case "JP":
        return SIGNATUREJP;
      case "EN":
      default:
        return SIGNATURE;
    }
  }

}
