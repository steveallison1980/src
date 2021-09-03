import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { MetadescService } from '../../../services/metadesc.service';
import { Meta } from '@angular/platform-browser';
import { PRACTICEAREASPAGEKEY } from './../../../../assets/data/staticnav';

@Component({
  selector: 'app-pro-practiceareas',
  templateUrl: './pro-practiceareas.component.html',
  styleUrls: ['./pro-practiceareas.component.css']
})
export class ProPracticeareasComponent implements OnInit {

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
        content: this.metaDescsvc.getContent(PRACTICEAREASPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
  }

}
