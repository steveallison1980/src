import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { ICard } from '../../interfaces/icontent';
import { ActivatedRoute } from '@angular/router';
import { MetadescService } from '../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { PUBLICATIONSPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-publicationspage',
  templateUrl: './publicationspage.component.html',
  styleUrls: ['./publicationspage.component.css']
})
export class PublicationspageComponent implements OnInit {

  constructor(
    private langsvc: LanguagesettingService,
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    private route: ActivatedRoute,
    private titleService: Title,
    ) {
      const lang = this.route.snapshot.paramMap.get('lang');
      if( lang != null && lang.toUpperCase() == "EN"){
        this.langsvc.setLang("EN");
      }
      if( lang != null && lang.toUpperCase() == "JP"){
        this.langsvc.setLang("JP");
      }
    }

  getTitle(){
    if( this.langsvc.lang == "EN"){
      return "Publications";
    } else {
      return "書籍";
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(PUBLICATIONSPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
  }

  getCardSettings(){
    var ret: ICard = {
      size: "large",
      border: true
    }
    return ret;
  }
}
