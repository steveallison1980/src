import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../../../interfaces/iperson';
import { NavigateService } from '../../../services/navigate.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

  getPerson(){
    return this.nav.curPerson;
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
