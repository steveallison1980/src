import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  constructor(public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }
  getImg(){
    if( this.nav.curPublication==null ) return "";
    return this.nav.curPublication.img;
  }
  getTitle(){
    if( this.nav.curPublication==null ) return "";
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPublication.titleJP;
      case "EN":
      default:
        return this.nav.curPublication.title;
    }
  }
  getPublishDate(){
    if( this.nav.curPublication==null ) return "";
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPublication.publishdateJP;
      case "EN":
      default:
        return this.nav.curPublication.publishdate;
    }
  }
  getAuthorsHeading(){
    if( this.nav.curPublication==null ) return null;
    switch (this.langService.lang) {
      case "JP":
        return "著作";
      case "EN":
      default:
        if( this.nav.curPublication.authors.length > 1 ) return "Authors";
        return "Author";
    }
  }
  getAuthors(){
    if( this.nav.curPublication==null ) return null;
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPublication.authorsJP;
      case "EN":
      default:
        return this.nav.curPublication.authors;
    }
  }
  getPublisherHeading(){
    switch (this.langService.lang) {
      case "JP":
        return "出版会社";
      case "EN":
      default:
        return "Publisher";
    }
  }
  getPublisherName(){
    if( this.nav.curPublication==null ) return null;
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPublication.publisherJP.name;
      case "EN":
      default:
        return this.nav.curPublication.publisher.name;
    }
  }
  getPublisherAddress(){
    if( this.nav.curPublication==null ) return null;
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPublication.publisherJP.address;
      case "EN":
      default:
        return this.nav.curPublication.publisher.address;
    }
  }
  getSynopsisHeading(){
    switch (this.langService.lang) {
      case "JP":
        return "概要";
      case "EN":
      default:
        return "Overview";
    }
  }
  getSynopsis(){
    if( this.nav.curPublication==null ) return null;
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPublication.synopsisJP;
      case "EN":
      default:
        return this.nav.curPublication.synopsis;
    }
  }
}
