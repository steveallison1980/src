import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { MetadescService } from '../../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { CAREERSPAGEKEY } from './../../../../assets/data/staticnav';

@Component({
  selector: 'app-boshuyokopage',
  templateUrl: './boshuyokopage.component.html',
  styleUrls: ['./boshuyokopage.component.css']
})
export class BoshuyokopageComponent implements OnInit {

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
    return "募集要項";
  }  
}
