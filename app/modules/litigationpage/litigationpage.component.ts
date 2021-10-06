import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { MetadescService } from '../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { LITIGATIONPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-litigationpage',
  templateUrl: './litigationpage.component.html',
  styleUrls: ['./litigationpage.component.css']
})
export class LitigationpageComponent implements OnInit {

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
      return "Litigation & Strategy";
    } else {
      return "訴訟・特許戦略・特許調査";
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(LITIGATIONPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
  }

}
