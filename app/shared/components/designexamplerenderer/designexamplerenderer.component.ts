import { Component, OnInit, Input } from '@angular/core';
import { IDesignExample } from './../../../interfaces/icontent';

@Component({
  selector: 'app-designexamplerenderer',
  templateUrl: './designexamplerenderer.component.html',
  styleUrls: ['./designexamplerenderer.component.css']
})
export class DesignexamplerendererComponent implements OnInit {

  @Input() design: IDesignExample;

  constructor() { }

  ngOnInit(): void {
  }
  getRegno(){
    return this.design.regno;
  }
  getTitle(){
    return this.design.title;
  }
  getApplicant(){
    return this.design.applicant;
  }
  getImages(){
    return this.design.images;
  }
}
