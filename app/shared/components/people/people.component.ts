import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from './../../../interfaces/iperson';
import { PROFESSIONALS_DATA, PEOPLE_DATA } from './../../../../assets/data/staticpeople';
import { NavigateService } from '../../../services/navigate.service';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input() currentGroup: string;

  constructor(public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'title'];
  people: Array<IPerson> = PEOPLE_DATA;
  
  clickDetails(p: IPerson) {
    this.nav.curPerson = p;
    this.nav.view = "person";
    window.scroll(0, 0);
  }

  getGroupIcon() {
    for (let i in PROFESSIONALS_DATA) {
      if (PROFESSIONALS_DATA[i].component == this.currentGroup) {
        return PROFESSIONALS_DATA[i].icon;
      }
    }
  }
  getGroupText() {
    for (let i in PROFESSIONALS_DATA) {
      if (PROFESSIONALS_DATA[i].component == this.currentGroup) {
        switch (this.langService.lang) {
          case "JP":
            return PROFESSIONALS_DATA[i].textJP;
          case "EN":
          default:
            return PROFESSIONALS_DATA[i].text;
        }
      }
    }
  }
  getPeople() {
    return this.people.filter(x => x.groups.includes(this.currentGroup));
    //return this.people;
  }
  getName(person){
    switch (this.langService.lang) {
      case "JP":
        return person.nameJP;
      case "EN":
      default:
        return person.name;
    }
  }
  longName(person){
    var name = this.getName(person);
    switch (this.langService.lang) {
      case "JP":
        return (name.length > 9 );
      case "EN":
      default:
        return false;
    }
  }
  getTitle(person){
    switch (this.langService.lang) {
      case "JP":
        return person.titleJP;
      case "EN":
      default:
        return person.title;
    }
  }
  hasTitle(person){
    return (this.getTitle(person) != "");
  }
  getBio(person){
    var bio: string = "";
    switch (this.langService.lang) {
      case "JP":
        if( person.specialtiesJP != null ){
          bio = person.specialtiesJP[0].text;
        } else if( person.educationJP != null ){
          bio = person.educationJP[0].text;
        }
        bio = bio.substring(0,36) + " ...";
        break;
      case "EN":
      default:
        if( person.specialties != null ){
          bio = person.specialties[0].text;
        } else if( person.education != null ){
          bio = person.education[0].text;
        }
        bio = bio.substring(0,90) + " ...";
        break;
    }
    return bio;
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
