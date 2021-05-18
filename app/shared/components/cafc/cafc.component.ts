import { Component, OnInit, Input } from '@angular/core';
import { NavigateService } from '../../../services/navigate.service';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { CAFC_REPORTS } from '../../../../assets/data/staticcafcreport';
import { ICAFCReport } from '../../../interfaces/icafcreport';

@Component({
  selector: 'app-cafc',
  templateUrl: './cafc.component.html',
  styleUrls: ['./cafc.component.css']
})
export class CafcComponent implements OnInit {

  @Input() filter: string;

  keyword = "";

  constructor(public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
    this.keyword = "";
  }

  reports: Array<ICAFCReport> = CAFC_REPORTS;

  getCAFCReports() {
    let filteryear = ""
    if( this.filter != "all") filteryear = this.filter;
    return this.reports.filter(x => x.reportpreview[0].includes(this.keyword) && x.reportyear.includes(filteryear));
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
}
