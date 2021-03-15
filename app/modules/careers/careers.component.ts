import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  curComponent: string = "careers";
  setComponent(component: string){
    this.curComponent = component;
    console.log(this.curComponent);
  }
  careersitems: any = [{text:'Careers',icon:'person_add',index:0,component:'careers'}];
}
