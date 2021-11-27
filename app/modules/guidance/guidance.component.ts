import { Component, OnInit } from '@angular/core';
import { GuidanceService } from "../../services/guidance.service";
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { MetadescService } from '../../services/metadesc.service';
import { Meta, Title } from '@angular/platform-browser';
import { GUIDANCEPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css']
})
export class GuidanceComponent implements OnInit {

  private fragment: string = "";

  constructor(
    private guidanceService: GuidanceService,
    private route: ActivatedRoute,
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
    private langsvc: LanguagesettingService,
    private titleService: Title) {
      const lang = this.route.snapshot.paramMap.get('lang');
      if( lang != null && lang.toUpperCase() == "EN"){
        this.langsvc.setLang("EN");
      }
      if( lang != null && lang.toUpperCase() == "JP"){
        this.langsvc.setLang("JP");
      }
    }

  getTitle(){
    return "Japanese IP Practice";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(GUIDANCEPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
    this.route.fragment.subscribe(fragment => { 
      if( fragment != null ){
        this.fragment = fragment; 
      }
    });
  }

  ngAfterViewInit(): void {
    try {
      var obj = document.querySelector('#' + this.fragment);
      if( obj != null ){
        obj.scrollIntoView();
      }
    } catch (e) { }
  }

  getContent(){
    var type = this.currentPage();
    return this.guidanceService.getContent(type);
  }

  currentPage(){
    if( this.route.snapshot.paramMap.get('type') == null ) return "patent";
    var ret = this.route.snapshot.paramMap.get('type');
    if( ret == null ) return "";
    return ret;
  }

  isGuide(){
    if( this.currentPage() != "toc") return true;
    return false;
  }

  isTOC(){
    return !this.isGuide();
  }
}
