import { Component, OnInit } from '@angular/core';
import { IPerson } from './../../interfaces/iperson';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  curComponent: string = "practiceareas";
  curView: string = "practiceareas";

  setComponent(component: string){
    console.log(component)
    this.curComponent = component;

    if( this.curComponent == "practiceareas"){
      this.curView = "practiceareas";
    } else {
      this.curView = "peopleview";
    }
    console.log(this.curComponent);
  }
  setPersonView(p: IPerson){
    this.curView = "personview";
    this.curPerson = p;
    console.log(this.curPerson.title)
    console.log(this.curView)
  }
  curPerson: IPerson = null;

  professionalsitems: any = [
    {text:'Practice Areas',icon:'manage_search',index:0,component:'practiceareas',type:'main-group'},
    {text:'Information Processing',icon:'computer',index:1,component:'infoproc_people',type:'sub-group'},
    {text:'Communications',icon:'settings_input_antenna',index:2,component:'comm_people',type:'sub-group'},
    {text:'Electronics',icon:'cable',index:3,component:'semicon_people',type:'sub-group'},
    {text:'Mechanical',icon:'miscellaneous_services',index:4,component:'mech_people',type:'sub-group'},
    {text:'Designs',icon:'category',index:5,component:'design_people',type:'sub-group'},
    {text:'Medical Devices',icon:'biotech',index:6,component:'meddev_people',type:'sub-group'},
    {text:'Chemicals, Pharma & Bio',icon:'science',index:7,component:'science_people',type:'sub-group'},
    {text:'Toys and Games',icon:'videogame_asset',index:8,component:'games_people',type:'sub-group'},
    {text:'Litigation',icon:'gavel',index:9,component:'litigation_people',type:'last-in-group'},
    {text:'Patent Attorneys',icon:'person',index:10,component:'patentattorneys',type:'sub-group'},
    {text:'Legal/Technical Advisors',icon:'person_outline',index:11,component:'advisors',type:'sub-group'},
    {text:'Patent Engineers',icon:'person',index:12,component:'patentengineers',type:'sub-group'},
    {text:'International Support',icon:'person_outline',index:13,component:'internationalsuppport',type:'sub-group'}
  ]
}
