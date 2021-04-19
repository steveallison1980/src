import { Component, OnInit, Input } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { LanguagesettingService } from '../../../services/languagesetting.service';
// import { METHODS } from 'http'; AAA

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

  getPerson() {
    return this.nav.curPerson;
  }
  getSpecialties() {
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPerson.specialtiesJP;
      case "EN":
      default:
        return this.nav.curPerson.specialties;
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
        return this.nav.curPerson.educationJP;
      case "EN":
      default:
        return this.nav.curPerson.education;
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
        return this.nav.curPerson.careerJP;
      case "EN":
      default:
        return this.nav.curPerson.career;
    }
  }
  getCareersHeading() {
    switch (this.langService.lang) {
      case "JP":
        return " 論文"; // TODO: May need to make changes later
      case "EN":
      default:
        return "Career";
    }
  }

  getMemberships() {
    switch (this.langService.lang) {
      case "JP":
        return this.nav.curPerson.membershipsJP;
      case "EN":
      default:
        return this.nav.curPerson.memberships;
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
        return this.nav.curPerson.publicationsJP;
      case "EN":
      default:
        return this.nav.curPerson.publications;
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
