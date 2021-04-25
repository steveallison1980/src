import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { ACCESS, ACCESSJP, ACCESSTITLE, ACCESSTITLEJP } from '../../../../assets/data/staticabout';


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
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
