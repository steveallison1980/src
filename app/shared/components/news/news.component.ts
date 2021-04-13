import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';
import { NEWS_DATA } from './../../../../assets/data/staticdatanews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private langService: LanguagesettingService,
    private nav: NavigateService) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['date', 'details'];

  getText(item){
    switch(item){
      case "title":
        if( this.langService.lang == "EN" ){
          return "What's New";
        } else {
          return "最新情報";
        }
    }
  }

  getDatasource(){
    if( this.langService.lang == "EN" ){
      return NEWS_DATA.dataEN;
    } else {
      return NEWS_DATA.dataJP;
    }
  }

  setNav(curPage, subPage){
    this.nav.curPage = curPage;
    this.nav.subPage = subPage;
  }
}
