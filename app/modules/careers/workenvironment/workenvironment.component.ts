import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { MetadescService } from '../../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { CAREERSPAGEKEY } from './../../../../assets/data/staticnav';

@Component({
  selector: 'app-workenvironment',
  templateUrl: './workenvironment.component.html',
  styleUrls: ['./workenvironment.component.css']
})
export class WorkenvironmentComponent implements OnInit {

  constructor(
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    public langService: LanguagesettingService,
    private titleService: Title) { }

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

  getTitle(){
    return "仕事環境";
  }  

}
