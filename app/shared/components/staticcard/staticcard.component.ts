import { Component, OnInit, Input } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-staticcard',
  templateUrl: './staticcard.component.html',
  styleUrls: ['./staticcard.component.css']
})
export class StaticcardComponent implements OnInit {

  bHover: boolean = false;

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
        return "../../../../assets/img/teamvignette.jpg";
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
        return "CAFC判決";
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
  mouseEnter(){
    this.bHover = true;
  }
  mouseLeave(){
    this.bHover = false;
  }
  getTextClass(){
    if( this.bHover ){
      return "hoveringtext";
    }
    return "nonhoveringtext";
  }
  getIconClass(){
    if( this.bHover ){
      return "hoveringicon";
    }
    return "nonhoveringicon";
  }
  getImgClass(){
    if( this.bHover ){
      return "hoveringimg";
    }
    return "nonhoveringimg";
  }
}
