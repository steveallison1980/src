import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  toggleLang(){
    console.log(this.langService.lang)
    this.langService.toggle();
    console.log(this.langService.lang)
  }
  getImgSrc(){
    if( this.langService.lang == "JP" ){
      return "../../../../assets/img/jp.png";
    } else {
      return "../../../../assets/img/en.png";
    }
  }
}
