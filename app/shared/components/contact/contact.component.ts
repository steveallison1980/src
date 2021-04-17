import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { CONTACTTITLE, CONTACTTITLEJP } from '../../../../assets/data/staticcontact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getTitleText(){
    switch(this.langService.lang){
      case "JP":
        return CONTACTTITLEJP;
      case "EN":
      default:
        return CONTACTTITLE;
    }
  }
  getNicitiesText(){
    switch(this.langService.lang){
      case "JP":
        return "連絡先";
      case "EN":
      default:
        return "Please feel free to contact us if you have any inquiries";
    }
  }
}

