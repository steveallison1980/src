import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { MetadescService } from '../../services/metadesc.service';
import { Meta } from '@angular/platform-browser';
import { CAFCALLPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-cafcreport',
  templateUrl: './cafcreport.component.html',
  styleUrls: ['./cafcreport.component.css']
})
export class CafcreportComponent implements OnInit {

  constructor(
    public nav: NavigateService,
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    private route: ActivatedRoute,
    private langsvc: LanguagesettingService) {
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
        content: this.metaDescsvc.getContent(CAFCALLPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
  }

}
