import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guidancetoc',
  templateUrl: './guidancetoc.component.html',
  styleUrls: ['./guidancetoc.component.css']
})
export class GuidancetocComponent implements OnInit {

  constructor(
    private titleService: Title
  ) { }

  getTitle(){
    return "Japanese IP Practice";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
