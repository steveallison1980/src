import { Component, OnInit, Input } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(
    public nav: NavigateService,
    private langService: LanguagesettingService) {
   }

  ngOnInit(): void {
  }

  getPerson(){
    return this.nav.curPerson;
  }
  getSpecialties(){
    switch(this.langService.lang){
      case "JP":
        return this.nav.curPerson.specialtiesJP;
      case "EN":
      default:
        return this.nav.curPerson.specialties;
    }
  }
  getSpecialitiesHeading(){
    switch(this.langService.lang){
      case "JP":
        return "得意分野";
      case "EN":
      default:
        return "Specialties";
    }
  }
  getBio(){
    var bio: string = "";
    if( this.nav.curPerson.specialties != null ){
      bio = this.nav.curPerson.specialties[0].text;
    } else if( this.nav.curPerson.education != null ){
      bio = this.nav.curPerson.education[0].text;
    }
    bio = bio.substring(0,90) + " ...";
    return bio;
  }

}
