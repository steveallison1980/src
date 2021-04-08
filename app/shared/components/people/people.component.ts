import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from './../../../interfaces/iperson';
import { PROFESSIONALS_DATA, PEOPLE_DATA } from './../../../../assets/data/staticdata';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input() currentGroup: string;

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'title'];
  people: Array<IPerson> = PEOPLE_DATA;
  
  clickDetails(p: IPerson) {
    console.log(p.name)
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
        return PROFESSIONALS_DATA[i].text;
      }
    }
  }

  getPeople() {
    return this.people.filter(x => x.groups.includes(this.currentGroup));
  }
}
