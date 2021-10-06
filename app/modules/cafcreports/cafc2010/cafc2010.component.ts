import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2010',
  templateUrl: './cafc2010.component.html',
  styleUrls: ['./cafc2010.component.css']
})
export class Cafc2010Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１０年　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
