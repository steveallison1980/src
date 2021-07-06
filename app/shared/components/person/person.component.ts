import { Component, OnInit, Input } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { IPerson } from '../../../interfaces/iperson';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: IPerson;

  constructor(
    public nav: NavigateService,
    private langService: LanguagesettingService) {
  }

  ngOnInit(): void {
  }

  getPerson() {
    return this.person;
  }
  getName(){
    switch (this.langService.lang) {
      case "JP":
        return this.person.nameJP;
      case "EN":
      default:
        if( this.person.qualifications != "")
          return this.person.name+", "+this.person.qualifications;
        return this.person.name;
    }
  }
  getTitle(){
    switch (this.langService.lang) {
      case "JP":
        return this.person.titleJP;
      case "EN":
      default:
        return this.person.title;
    }
  }
  getSpecialties() {
    switch (this.langService.lang) {
      case "JP":
        return this.person.specialtiesJP;
      case "EN":
      default:
        return this.person.specialties;
    }
  }
  getSpecialitiesHeading() {
    switch (this.langService.lang) {
      case "JP":
        return "得意分野";
      case "EN":
      default:
        return "Specialties";
    }
  }

  getEducation() {
    switch (this.langService.lang) {
      case "JP":
        return this.person.educationJP;
      case "EN":
      default:
        return this.person.education;
    }
  }
  getEducationHeading() {
    switch (this.langService.lang) {
      case "JP":
        return "学歴";
      case "EN":
      default:
        return "Education";
    }
  }

  getCareers() {
    switch (this.langService.lang) {
      case "JP":
        return this.person.careerJP;
      case "EN":
      default:
        return this.person.career;
    }
  }
  getCareersHeading() {
    switch (this.langService.lang) {
      case "JP":
        return " 経歴"; // TODO: May need to make changes later
      case "EN":
      default:
        return "Career";
    }
  }

  getMemberships() {
    switch (this.langService.lang) {
      case "JP":
        return this.person.membershipsJP;
      case "EN":
      default:
        return this.person.memberships;
    }
  }
  getMembershipsHeading() {
    switch (this.langService.lang) {
      case "JP":
        return " メンバーシップ及び役職／学術活動";
      case "EN":
      default:
        return "Membership(s)";
    }
  }

  getPublications() {
    switch (this.langService.lang) {
      case "JP":
        return this.person.publicationsJP;
      case "EN":
      default:
        return this.person.publications;
    }
  }
  getPublicationsHeading() {
    switch (this.langService.lang) {
      case "JP":
        return " 著作";
      case "EN":
      default:
        return "Publications";
    }
  }
}
