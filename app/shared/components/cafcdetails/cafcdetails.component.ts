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
    var ret = "";
    if( this.nav.cafcreport != null){
      if( this.nav.cafcreport.caseno != "" ){
        ret += this.nav.cafcreport.caseno;
      }
      if( this.nav.cafcreport.reportdate != "" ){
        ret += " (" +this.nav.cafcreport.reportdate + ")";
      }
    }
    return ret;
  }
  getReportContent(){
    return this.nav.cafcreport.content;
  }
}
