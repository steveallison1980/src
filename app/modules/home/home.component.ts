import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

  getSubPage(){
    return this.nav.subPage;
  }
  isWelcomemessage(){
    return (this.nav.subPage == "welcomemessage");
  }
  isNews(){
    return (this.nav.subPage == "news");
  }
  isContact(){
    return (this.nav.subPage == "contact");
  }
  isAccess(){
    return (this.nav.subPage == "access");
  }
  isPublications(){
    return (this.nav.subPage == "publications");
  }

  homeitems: any = [{text:'Welcome Message',textJP:'ご挨拶',icon:'local_florist',index:0,component:'welcomemessage'},
    {text:'What\'s New',textJP:'最新情報',icon:'announcement',index:1,component:'news'},
    {text:'Contact Information/Map',textJP:'お問い合わせ・アクセス',icon:'location_on',index:2,component:'contact'},
    {text:'Publications',textJP:'書籍',icon:'local_library',index:3,component:'publications'}
  ];
}
