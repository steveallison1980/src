import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2009',
  templateUrl: './cafc2009.component.html',
  styleUrls: ['./cafc2009.component.css']
})
export class Cafc2009Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２００９年　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
