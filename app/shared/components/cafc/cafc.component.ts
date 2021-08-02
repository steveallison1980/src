import { Component, OnInit, Input } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { CAFC_REPORTS } from '../../../../assets/data/staticcafcreport';
import { ICAFCReport, IContent } from '../../../interfaces/icafcreport';

@Component({
  selector: 'app-cafc',
  templateUrl: './cafc.component.html',
  styleUrls: ['./cafc.component.css']
})
export class CafcComponent implements OnInit {

  @Input() filter: string;

  keyword = "";
  searchretstr = "";

  constructor(
    public nav: NavigateService) { }

  ngOnInit(): void {
    this.keyword = "";
  }

  reports: Array<ICAFCReport> = CAFC_REPORTS;

  getCAFCReports() {
    var ret = this.reports.filter(x => (x.reportpreview[0].includes(this.keyword) || this.searchContent(x.content,this.keyword)) );
    return ret;
  }

  getSearchResultsCount(){
    var reports = this.getCAFCReports();
    return "（"+reports.length+"件）";
  }

  searchContent(c: IContent[], needle: string){
    var found = false;
    c.forEach(content => {
      content.elements.forEach(element => {
        if( element.text.includes(needle)) {
          found = true;
          return true;
        }
      })
      if( found ) return true;
    });
    if( found ) return true;
    return false;
  }

  getTitle(cafc) {
    return cafc.casetitle;
  }

  getPreview(cafc) {
    return cafc.reportpreview;
  }

  getContent(cafc){
    return "";
  }

  clickDetails(report){
    console.log(this.nav.subPage)
    this.nav.cafcreport = report;
    window.scroll(0, 0);
  }
}
