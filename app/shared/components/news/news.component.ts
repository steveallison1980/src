import { Component, OnInit } from '@angular/core';

export interface NewsItem {
  date: string;
  details: string;
  link: string;
}

const NEWS_DATA: NewsItem[] = [
  { date: 'October 14, 2020',
    details: 'Incorporation of Ohtsuka Patent Office, P.C.',
    link: ''},
  { date: 'February 27, 2020',
    details: 'An Introduction to the Patent and Design Act Revisions of 2019',
    link: 'https://www.patest.co.jp/pdf/Patent%20&%20Design%20Act%20Revisions%20in%202019.pdf'},
  { date: 'April 1, 2019',
    details: 'New members joined our firm',
    link: ''}
];

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['date', 'details'];
  dataSource = NEWS_DATA;
}
