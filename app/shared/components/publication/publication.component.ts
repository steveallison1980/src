import { Component, OnInit, Input } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { IPublication } from '../../../interfaces/ipublication';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() pub: IPublication;

  constructor(public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getPub() {
    return this.pub;
  }
  getImg(){
    return this.pub.img;
  }
  getTitle(){
    switch (this.langService.lang) {
      case "JP":
        return this.pub.titleJP;
      case "EN":
      default:
        return this.pub.title;
    }
  }
  getPublishDate(){
    switch (this.langService.lang) {
      case "JP":
        return this.pub.publishdateJP;
      case "EN":
      default:
        return this.pub.publishdate;
    }
  }
  getAuthorsHeading(){
    switch (this.langService.lang) {
      case "JP":
        return "著作";
      case "EN":
      default:
        if( this.pub.authors.length > 1 ) return "Authors";
        return "Author";
    }
  }
  getAuthors(){
    switch (this.langService.lang) {
      case "JP":
        return this.pub.authorsJP;
      case "EN":
      default:
        return this.pub.authors;
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
    switch (this.langService.lang) {
      case "JP":
        return this.pub.publisherJP.name;
      case "EN":
      default:
        return this.pub.publisher.name;
    }
  }
  getPublisherAddress(){
    switch (this.langService.lang) {
      case "JP":
        return this.pub.publisherJP.address;
      case "EN":
      default:
        return this.pub.publisher.address;
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
    switch (this.langService.lang) {
      case "JP":
        return this.pub.synopsisJP;
      case "EN":
      default:
        return this.pub.synopsis;
    }
  }
}
