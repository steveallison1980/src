import { Component, OnInit, Input } from '@angular/core';
import { LanguagesettingService } from '../../services/languagesetting.service';

@Component({
  selector: 'app-staticcard',
  templateUrl: './staticcard.component.html',
  styleUrls: ['./staticcard.component.css']
})
export class StaticcardComponent implements OnInit {

  @Input() type: string;

  constructor(
    private langService: LanguagesettingService
  ) { }

  ngOnInit(): void {
  }

  getType(){
    return this.type;
  }
  getLang(){
    return this.langService.lang;
  }
  getImgFilePath(){
    switch( this.type ){
      case "welcome":
        return "../../../../assets/img/welcome.jpg";
      case "cafc":
        return "../../../../assets/img/cafc.png";
      case "guidance":
        return "../../../../assets/img/classroom.jpg";
      case "team":
        return "../../../../assets/img/team.jpg";
    }
  }
  getTitle(){
    switch( this.type ){
      case "welcome":
        if( this.langService.lang == "EN"){
          return "Welcome Message";
        } else {
          return "ご挨拶";
        }
      case "cafc":
        return "CAFC判定";
      case "guidance":
        return "IP Guidance";
      case "team":
        if( this.langService.lang == "EN"){
          return "Meet Our Team";
        } else {
          return "メンバー";
        }
    }
  }
}
