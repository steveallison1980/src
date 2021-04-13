import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { ABOUTTITLEJP, ABOUTTITLE, ABOUTUSJP, ABOUTUS} from '../../../../assets/data/staticabout';
import { SIGNATURE, SIGNATUREJP} from '../../../../assets/data/staticall';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getTitle(){
    switch(this.langService.lang){
      case "JP":
        return ABOUTTITLEJP;
      case "EN":
      default:
        return ABOUTTITLE;
    }
  }

  getParas(){
    switch(this.langService.lang){
      case "JP":
        return ABOUTUSJP;
      case "EN":
      default:
        return ABOUTUS;
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
