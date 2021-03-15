import { Component, OnInit } from '@angular/core';

export interface ContactItem {
  title: string;
  details: string;
}

const CONTACT_DATA: ContactItem[] = [
  { title: 'Name',
    details: 'Ohtsuka Patent Office, P.C.'},
  { title: 'Telephone',
    details: '+81-3-5276-3241'},
  { title: 'Fax',
    details: '+81-3-5276-3242'},
  { title: 'E-mail',
    details: 'opt@patest.co.jp'},
  { title: 'Mailing Address',
    details: '7TH FL., KIOICHO PARK BLDG., 3-6, KIOICHO, CHIYODA-KU, TOKYO 102-0094, JAPAN'}];

@Component({
  selector: 'app-contactinfotable',
  templateUrl: './contactinfotable.component.html',
  styleUrls: ['./contactinfotable.component.css']
})
export class ContactinfotableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['date', 'details'];
  dataSource = CONTACT_DATA;
}
