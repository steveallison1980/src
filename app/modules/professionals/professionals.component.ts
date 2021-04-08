import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
import { IPerson } from '../../interfaces/iperson';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

  isPracticeAreas(){
    return ( this.nav.subPage == "practiceareas");
  }
  isPersonView(){
    return (this.nav.view == "person");
  }
  isGroupView(){
    return (this.nav.view == "group");
  }
  getSubPage(){
    return this.nav.subPage;
  }
  setPersonView(p: IPerson){
    this.nav.view == "person"
    this.nav.curPerson = p;
  }
  
  professionalsitems: any = [
    {text:'Practice Areas',textJP:'専門分野別',icon:'',index:0,component:'practiceareas',type:'main-group'},
    {text:'Information Processing',textJP:'情報処理系',icon:'computer',index:1,component:'infoproc_people',type:'sub-group'},
    {text:'Communications',textJP:'通信技術系',icon:'settings_input_antenna',index:2,component:'comm_people',type:'sub-group'},
    {text:'Electronics',textJP:'半導体・電気回路系',icon:'cable',index:3,component:'semicon_people',type:'sub-group'},
    {text:'Mechanical',textJP:'機械系',icon:'miscellaneous_services',index:4,component:'mech_people',type:'sub-group'},
    {text:'Designs',textJP:'意匠',icon:'category',index:5,component:'design_people',type:'sub-group'},
    {text:'Medical Devices',textJP:'医療機器',icon:'biotech',index:6,component:'meddev_people',type:'sub-group'},
    {text:'Chemicals, Pharma & Bio',textJP:'化学・医薬・バイオ',icon:'science',index:7,component:'science_people',type:'sub-group'},
    {text:'Toys and Games',textJP:'アミューズメント・ゲーム',icon:'videogame_asset',index:8,component:'games_people',type:'sub-group'},
    {text:'Litigation',textJP:'訴訟・訴訟支援',icon:'gavel',index:9,component:'litigation_people',type:'last-in-group'},
    {text:'Patent Attorneys',textJP:'弁理士',icon:'person',index:10,component:'patentattorneys',type:'sub-group'},
    {text:'Legal/Technical Advisors',textJP:'法律顧問・技術顧問',icon:'person_outline',index:11,component:'advisors',type:'sub-group'},
    {text:'Patent Engineers',textJP:'特許技術スタッフ',icon:'person',index:12,component:'patentengineers',type:'sub-group'},
    {text:'International Support',textJP:'技術・海外支援',icon:'person_outline',index:13,component:'internationalsupport',type:'sub-group'}
  ]
}
