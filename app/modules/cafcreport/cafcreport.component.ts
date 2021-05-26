import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-cafcreport',
  templateUrl: './cafcreport.component.html',
  styleUrls: ['./cafcreport.component.css']
})
export class CafcreportComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

}
