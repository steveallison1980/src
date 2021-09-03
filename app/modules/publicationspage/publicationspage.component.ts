import { Component, OnInit } from '@angular/core';
import { WELCOMECONTENTJP, WELCOMECONTENT, WELCOMETITLEJP, WELCOMETITLE, WELCOMEIMG } from '../../../assets/data/staticwelcome';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { ICard } from '../../interfaces/icontent';
import { ActivatedRoute } from '@angular/router';
import { MetadescService } from '../../services/metadesc.service';
import { Meta } from '@angular/platform-browser';
import { PUBLICATIONSPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-publicationspage',
  templateUrl: './publicationspage.component.html',
  styleUrls: ['./publicationspage.component.css']
})
export class PublicationspageComponent implements OnInit {

  constructor(
    private langService: LanguagesettingService,
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    private route: ActivatedRoute
    ) {
      const lang = this.route.snapshot.paramMap.get('lang');
      if( lang != null && lang.toUpperCase() == "EN"){
        this.langService.setLang("EN");
      }
      if( lang != null && lang.toUpperCase() == "JP"){
        this.langService.setLang("JP");
      }
    }

  ngOnInit(): void {
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(PUBLICATIONSPAGEKEY,this.langService.lang)
      },
      "name='description'"
    );
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
