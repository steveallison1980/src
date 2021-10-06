import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2008',
  templateUrl: './cafc2008.component.html',
  styleUrls: ['./cafc2008.component.css']
})
export class Cafc2008Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２００８年　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
