import { Component, OnInit } from '@angular/core';
import { OURSTORYTEXT,OURSTORYTEXTJP } from "../../../../assets/data/staticaboutusblurb"
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-aboutusblurb',
  templateUrl: './aboutusblurb.component.html',
  styleUrls: ['./aboutusblurb.component.css']
})
export class AboutusblurbComponent implements OnInit {

  constructor(public langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getOurStoryText(){
    if( this.langService.lang == "EN")
      return OURSTORYTEXT;
    else
      return OURSTORYTEXTJP;
  }
}
