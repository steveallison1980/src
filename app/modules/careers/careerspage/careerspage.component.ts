import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { ActivatedRoute } from '@angular/router';
import { MetadescService } from '../../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { CAREERSPAGEKEY } from './../../../../assets/data/staticnav';

@Component({
  selector: 'app-careerspage',
  templateUrl: './careerspage.component.html',
  styleUrls: ['./careerspage.component.css']
})
export class CareerspageComponent implements OnInit {

  constructor(
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    private route: ActivatedRoute,
    public langService: LanguagesettingService,
    private titleService: Title
    ) 
    {
      const lang = this.route.snapshot.paramMap.get('lang');
      if( lang != null && lang.toUpperCase() == "EN"){
        this.langService.setLang("EN");
      }
      if( lang != null && lang.toUpperCase() == "JP"){
        this.langService.setLang("JP");
      }
    }

    getTitle(){
      return "Job Openings";
    }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(CAREERSPAGEKEY,this.langService.lang)
      },
      "name='description'"
    );
  }

}
