import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2013',
  templateUrl: './cafc2013.component.html',
  styleUrls: ['./cafc2013.component.css']
})
export class Cafc2013Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１３年　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
