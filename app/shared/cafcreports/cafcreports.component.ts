import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { CAFC_REPORT } from '../../../assets/data/staticcafcreport';
import { ICAFCReport } from '../../interfaces/icafcreport';

@Component({
  selector: 'app-cafcreports',
  templateUrl: './cafcreports.component.html',
  styleUrls: ['./cafcreports.component.css']
})
export class CafcreportsComponent implements OnInit {

  constructor(public nav: NavigateService,
    private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  cafc: Array<ICAFCReport> = CAFC_REPORT;

  getCAFCReport() {
    return this.cafc;
  }

  getTitle(cafc) {
    return cafc.casetitle;
  }

  getPreview(cafc) {
    return cafc.reportpreview;
  }

}
