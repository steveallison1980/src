import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';

@Component({
  selector: 'app-cafcdetails',
  templateUrl: './cafcdetails.component.html',
  styleUrls: ['./cafcdetails.component.css']
})
export class CafcdetailsComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

  getTitle(){
    return this.nav.cafcreport.casetitle;
  }
  getCaseNoDate(){
    return this.nav.cafcreport.caseno + " (" +
      this.nav.cafcreport.reportdate + ")";
  }
  getReportContent(){
    return this.nav.cafcreport.content;
  }
}
