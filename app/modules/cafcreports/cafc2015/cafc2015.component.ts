import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2015',
  templateUrl: './cafc2015.component.html',
  styleUrls: ['./cafc2015.component.css']
})
export class Cafc2015Component implements OnInit {
  
  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１５　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
