import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguagesettingService } from '../../services/languagesetting.service';

@Component({
  selector: 'app-aboutcontactpage',
  templateUrl: './aboutcontactpage.component.html',
  styleUrls: ['./aboutcontactpage.component.css']
})
export class AboutcontactpageComponent implements OnInit {

  constructor(
    private titleService: Title,
    private langsvc: LanguagesettingService
    ) { }

  getTitle(){
    if( this.langsvc.lang == "EN"){
      return "Contact Information";
    } else {
      return "お問い合わせ・アクセス";
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
