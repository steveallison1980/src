import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { WELCOMEMESSAGE, WELCOMEMESSAGEJP, WELCOMETITLEJP, WELCOMETITLE } from '../../../../assets/data/staticwelcome';
import { SIGNATURE, SIGNATUREJP} from '../../../../assets/data/staticall';

@Component({
  selector: 'app-welcomemessage',
  templateUrl: './welcomemessage.component.html',
  styleUrls: ['./welcomemessage.component.css']
})
export class WelcomemessageComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

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
