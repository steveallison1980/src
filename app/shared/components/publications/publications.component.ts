import { Component, OnInit } from '@angular/core';
import { PUBLICATIONS_DATA } from './../../../../assets/data/staticpublications';
import { IPublication } from './../../../../app/interfaces/ipublication';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor(public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  //todo
  publications: Array<IPublication> = PUBLICATIONS_DATA;
  
  clickDetails(p: IPublication) {
    this.nav.curPublication = p;
    this.nav.curPage = "home";
    this.nav.subPage = "publication";
    window.scroll(0, 0);
  }

  getTitle(pub:IPublication ){
    switch (this.langService.lang) {
      case "JP":
        return pub.titleJP;
      case "EN":
      default:
        return pub.title;
    }
  }
  getPubDate(pub:IPublication){
    switch (this.langService.lang) {
      case "JP":
        return pub.publishdateJP;
      case "EN":
      default:
        return pub.publishdate;
    }
  }
  getShort(pub:IPublication){
    var shortdesc: string = "";
    switch (this.langService.lang) {
      case "JP":
        shortdesc = pub.synopsisJP[0];
        return shortdesc.substring(0,32) + " ...";
      case "EN":
      default:
        shortdesc = pub.synopsis[0];
        return shortdesc.substring(0,64) + " ...";
    }
  }
  getPubs() {
    //todo
    return this.publications;
  }

  getDetails(){
    switch (this.langService.lang) {
      case "JP":
        return "詳細表示";
      case "EN":
      default:
        return "details";
    }
  }
}
