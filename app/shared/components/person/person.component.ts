import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../../../interfaces/iperson';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: IPerson;

  constructor() { }

  ngOnInit(): void {
  }

}
