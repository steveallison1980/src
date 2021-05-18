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

  constructor(public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  reports: Array<ICAFCReport> = CAFC_REPORTS;

  getCAFCReports() {
    if( this.filter == "all") return this.reports;
    return this.reports.filter(x => x.reportyear.includes(this.filter));
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
