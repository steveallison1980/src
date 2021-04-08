import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../../../interfaces/iperson';
import { NavigateService } from '../../../services/navigate.service';

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

}
