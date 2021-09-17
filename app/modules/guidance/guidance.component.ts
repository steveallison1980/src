import { Component, OnInit } from '@angular/core';
import { GuidanceService } from "../../services/guidance.service";
import { ActivatedRoute } from '@angular/router';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { MetadescService } from '../../services/metadesc.service';
import { Meta } from '@angular/platform-browser';
import { GUIDANCEPAGEKEY } from './../../../assets/data/staticnav';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css']
})
export class GuidanceComponent implements OnInit {

  private fragment: string;

  constructor(
    private guidanceService: GuidanceService,
    private route: ActivatedRoute,
    private metasvc:Meta,
    private metaDescsvc: MetadescService,
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
        content: this.metaDescsvc.getContent(GUIDANCEPAGEKEY,this.langsvc.lang)
      },
      "name='description'"
    );
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  getContent(){
    var type = this.currentPage();
    return this.guidanceService.getContent(type);
  }

  currentPage(){
    if( this.route.snapshot.paramMap.get('type') == null ) return "patent";
    return this.route.snapshot.paramMap.get('type');
  }

  isGuide(){
    if( this.currentPage() != "toc") return true;
    return false;
  }

  isTOC(){
    return !this.isGuide();
  }
}
