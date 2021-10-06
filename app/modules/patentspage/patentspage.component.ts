import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { MetadescService } from '../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { PATENTSPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-patentspage',
  templateUrl: './patentspage.component.html',
  styleUrls: ['./patentspage.component.css']
})
export class PatentspageComponent implements OnInit {

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
      return "Patents and Utility Models";
    } else {
      return "特許・実用新案取得";
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(PATENTSPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
  }

}
