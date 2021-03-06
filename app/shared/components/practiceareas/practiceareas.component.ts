import { Component, OnInit } from '@angular/core';
import { PROFESSIONALS_DATA } from './../../../../assets/data/staticpeople'
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { NavigateService } from '../../../services/navigate.service';
import { PROFESSIONAL, PROFESSIONALJP, PROFESSIONALTITLE, PROFESSIONALTITLEJP, COMPUTERS, COMPUTERSJP, COMPUTERSTITLE, COMPUTERSTITLEJP, MECHANICAL, MECHANICALJP, MECHANICALTITLE, MECHANICALTITLEJP, DESIGNS, DESIGNSJP, DESIGNTITLE, DESIGNTITLEJP, MEDICAL, MEDICALJP, MEDICALTITLE, MEDICALTITLEJP, CHEMICALS, CHEMICALSJP, CHEMICALTITLE, CHEMICALTITLEJP, AMUSEMENT, AMUSEMENTJP, AMUSEMENTSTITLEJP, AMUSEMENTSTITLE, LITIGATION, LITIGATIONJP, LITIGATIONTITLE, LITIGATIONTITLEJP} from '../../../../assets/data/staticprofessionals';
import { CHECKOUTDESIGNGUIDE } from '../../../../assets/data/staticguidancedesign';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-practiceareas',
  templateUrl: './practiceareas.component.html',
  styleUrls: ['./practiceareas.component.css']
})
export class PracticeareasComponent implements OnInit {

  constructor(private langService: LanguagesettingService,
    public nav: NavigateService) { }

  ngOnInit(): void {
  }

  toggleLang(){
    this.langService.toggle();
  }

  isEnglish(){
    return (this.langService.lang == "EN");
  }
  getCheckOutDesignGuide(){
    console.log(CHECKOUTDESIGNGUIDE)
    return CHECKOUTDESIGNGUIDE;
  }

  getTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = PROFESSIONALTITLEJP;
        break;
      case "EN": 
      default:
        text = PROFESSIONALTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getComputerTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = COMPUTERSTITLEJP;
        break;
      case "EN": 
      default:
        text = COMPUTERSTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getMechanicalTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = MECHANICALTITLEJP;
        break;
      case "EN": 
      default:
        text = MECHANICALTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: true
    }
    return ret;
  }

  getDesignTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = DESIGNTITLEJP;
        break;
      case "EN": 
      default:
        text = DESIGNTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getMedicalTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = MEDICALTITLEJP;
        break;
      case "EN": 
      default:
        text = MEDICALTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: true
    }
    return ret;
  }

  getChemicalTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = CHEMICALTITLEJP;
        break;
      case "EN": 
      default:
        text = CHEMICALTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getAmusementTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = AMUSEMENTSTITLEJP;
        break;
      case "EN": 
      default:
        text = AMUSEMENTSTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: true
    }
    return ret;
  }

  getLitigationTitle(){
    var text = "";
    switch(this.langService.lang){
      case "JP": 
        text = LITIGATIONTITLEJP;
        break;
      case "EN": 
      default:
        text = LITIGATIONTITLE;
    }
    var ret: ITitle = {
      class: "largetext",
      text: text,
      bDarken: false
    }
    return ret;
  }

  getParas(){
    switch(this.langService.lang){
      case "JP":
        return PROFESSIONALJP;
      case "EN":
      default:
        return PROFESSIONAL;
    }
  }

  getComputerParas(){
    switch(this.langService.lang){
      case "JP":
        return COMPUTERSJP;
      case "EN":
      default:
        return COMPUTERS;
    }
  }

  getMechanicalParas(){
    switch(this.langService.lang){
      case "JP":
        return MECHANICALJP;
      case "EN":
      default:
        return MECHANICAL;
    }
  }

  getDesignParas(){
    switch(this.langService.lang){
      case "JP":
        return DESIGNSJP;
      case "EN":
      default:
        return DESIGNS;
    }
  }

  getMedicalParas(){
    switch(this.langService.lang){
      case "JP":
        return MEDICALJP;
      case "EN":
      default:
        return MEDICAL;
    }
  }

  getChemicalParas(){
    switch(this.langService.lang){
      case "JP":
        return CHEMICALSJP;
      case "EN":
      default:
        return CHEMICALS;
    }
  }

  getAmusementParas(){
    switch(this.langService.lang){
      case "JP":
        return AMUSEMENTJP;
      case "EN":
      default:
        return AMUSEMENT;
    }
  }

   getLitigationParas(){
    switch(this.langService.lang){
      case "JP":
        return LITIGATIONJP;
      case "EN":
      default:
        return LITIGATION;
    }
  }

  getGroupIcon(group) {
    for (let i in PROFESSIONALS_DATA) {
      if (PROFESSIONALS_DATA[i].component == group) {
        return PROFESSIONALS_DATA[i].icon;
      }
    }
  }
  getGroupText(group) {
    for (let i in PROFESSIONALS_DATA) {
      if (PROFESSIONALS_DATA[i].component == group) {
        if( this.langService.lang == "EN" ){
          return PROFESSIONALS_DATA[i].text;
        } else {
          return PROFESSIONALS_DATA[i].textJP;
        }
      }
    }
  }

  groupView(group){
    window.scroll(0, 0);
    this.nav.subPage = group;
  }

}
