import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';
import { CONTACTTITLE, CONTACTTITLEJP} from '../../../../assets/data/staticcontact';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private langService: LanguagesettingService,
    public nav: NavigateService) {}

  ngOnInit(): void {
  }

  clickContact(){
    this.nav.curPage = "home";
    this.nav.subPage = "contact";
  }
  toggleLang(){
    console.log(this.langService.lang)
    this.langService.toggle();
    console.log(this.langService.lang)
  }
  getImgSrc(){
    if( this.langService.lang == "JP" ){
      return "../../../../assets/img/en.png";
    } else {
      return "../../../../assets/img/jp.png";
    }
  }
  getContactText(){
    switch(this.langService.lang){
      case "JP":
        return CONTACTTITLEJP;
      case "EN":
      default:
        return CONTACTTITLE;
    }
  }
}
