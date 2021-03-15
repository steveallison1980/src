import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  curComponent: string = "welcomemessage";
  setComponent(component: string){
    this.curComponent = component;
    console.log(this.curComponent);
  }
  homeitems: any = [{text:'Welcome Message',icon:'local_florist',index:0,component:'welcomemessage'},
    {text:'What\'s New',icon:'announcement',index:1,component:'news'},
    {text:'Contact Information',icon:'call',index:2,component:'contact'},
    {text:'Access',icon:'location_on',index:3,component:'access'}];
}
