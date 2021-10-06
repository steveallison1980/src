import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { MetadescService } from '../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { KEYFEATURESPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-keyfeaturespage',
  templateUrl: './keyfeaturespage.component.html',
  styleUrls: ['./keyfeaturespage.component.css']
})
export class KeyfeaturespageComponent implements OnInit {

  constructor(
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    private route: ActivatedRoute,
    private langsvc: LanguagesettingService,
    private titleService: Title
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
      return "Key Features";
    } else {
      return "特色";
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(KEYFEATURESPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
  }

}
