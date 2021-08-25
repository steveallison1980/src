import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { ActivatedRoute } from '@angular/router';
import { ICard, IContent } from '../../interfaces/icontent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private langsvc: LanguagesettingService) {
      const lang = this.route.snapshot.paramMap.get('lang');
      if( lang != null && lang.toUpperCase() == "EN"){
        this.langsvc.setLang("EN");
      }
      if( lang != null && lang.toUpperCase() == "JP"){
        this.langsvc.setLang("JP");
      }
    }
    
    getLang(){
      return this.langsvc.lang;
    }

    getGuidanceCAFCContent(){
      if( this.langsvc.lang == "EN"){
        var ret: IContent = {
          elements: [
              {
                type: "span",
                objs: [{
                    text: "Learn about Japanese",
                    url: null,
                    routerlink: null,
                    tooltip: null,
                    classes: null,
                }]
              },
              {
                type: "span",
                objs: [{
                    text: "patent",
                    url: null,
                    routerlink: "/guidance/patent",
                    tooltip: "",
                    classes: null,
                }]
              },
              {
                type: "span",
                objs: [{
                    text: ",",
                    url: null,
                    routerlink: null,
                    tooltip: null,
                    classes: null,
                }]
              },
              {
                type: "span",
                objs: [{
                    text: "trademark",
                    url: null,
                    routerlink: "/guidance/trademark",
                    tooltip: "",
                    classes: null,
                }]
              },
              {
                type: "span",
                objs: [{
                    text: ", and",
                    url: null,
                    routerlink: null,
                    tooltip: null,
                    classes: null,
                }]
              },
              {
                type: "span",
                objs: [{
                    text: "design",
                    url: null,
                    routerlink: "/guidance/design",
                    tooltip: null,
                    classes: null,
                }]
              },
              {
                type: "span",
                objs: [{
                    text: "practice from our Q&A format guidance.",
                    url: null,
                    routerlink: null,
                    tooltip: null,
                    classes: null,
                }]
              }]
        };
        return ret;
      } else {
        var ret: IContent = {
          elements: [
              {
                type: "span",
                objs: [{
                    text: "米国のCAFCの判例紹介",
                    url: null,
                    routerlink: null,
                    tooltip: null,
                    classes: null,
                }]
              }]
        };
        return ret;
      }
    }
    getGuidanceCAFCTitle(){
      if( this.langsvc.lang == "EN"){
        return "Learn about IP in Japan";
      } else {
        return "CAFC判決";
      }
    }
    getTeamImage(){
      return "../../../../assets/img/teamvignette.jpg";
    }
    getTeamContent(){
      if( this.langsvc.lang == "EN"){
        var ret: IContent = {
          elements: [
              {
                type: "span",
                objs: [{
                    text: "Meet our team of patent attorneys, patent engineers, and legal and technical advisors.",
                    url: null,
                    routerlink: null,
                    tooltip: null,
                    classes: null,
                }]
              }]
        };
        return ret;
      } else {
        var ret: IContent = {
          elements: [
              {
                type: "span",
                objs: [{
                    text: "メンバー紹介",
                    url: null,
                    routerlink: null,
                    tooltip: null,
                    classes: null,
                }]
              }]
        };
        return ret;
      }
    }
    getTeamTitle(){
      if( this.langsvc.lang == "EN"){
        return "Meet our team";
      } else {
        return "メンバー";
      }
    }
    getCardSettings(){
      var ret: ICard = {
        size: "small",
        border: true
      }
      return ret;
    }

  ngOnInit(): void {
  }
}
