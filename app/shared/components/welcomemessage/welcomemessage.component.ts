import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../languagesetting.service';

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

  getText(){
    switch(this.langService.lang){
      case "JP":
        

    }
  }

}
