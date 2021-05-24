import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-cafcreports',
  templateUrl: './cafcreports.component.html',
  styleUrls: ['./cafcreports.component.css']
})
export class CafcreportsComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void { }

  isListView(){
    return (this.nav.cafcreport == null);  
  }
}
