import { Component, OnInit } from '@angular/core';
import { WELCOMECONTENTJP, WELCOMECONTENT, WELCOMETITLEJP, WELCOMETITLE, WELCOMEIMG } from '../../../assets/data/staticwelcome';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { ICard } from '../../interfaces/icontent';

@Component({
  selector: 'app-publicationspage',
  templateUrl: './publicationspage.component.html',
  styleUrls: ['./publicationspage.component.css']
})
export class PublicationspageComponent implements OnInit {

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

  getContent(){
    switch(this.langService.lang){
      case "JP":
        return WELCOMECONTENTJP;
      case "EN":
      default:
        return WELCOMECONTENT;
    }
  }

  getImage(){
    return WELCOMEIMG;
  }

  getCardSettings(){
    var ret: ICard = {
      size: "large",
      border: true
    }
    return ret;
  }
}
