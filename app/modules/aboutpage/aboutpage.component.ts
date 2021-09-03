import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { MetadescService } from '../../services/metadesc.service';
import { Meta } from '@angular/platform-browser';
import { ABOUTPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  constructor(
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    private route: ActivatedRoute,
    private langsvc: LanguagesettingService
  ) {
    const lang = this.route.snapshot.paramMap.get('lang');
    if( lang != null && lang.toUpperCase() == "EN"){
      this.langsvc.setLang("EN");
    }
    if( lang != null && lang.toUpperCase() == "JP"){
      this.langsvc.setLang("JP");
    }
  }

  ngOnInit(): void {
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(ABOUTPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
  }

}
