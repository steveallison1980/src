import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2017',
  templateUrl: './cafc2017.component.html',
  styleUrls: ['./cafc2017.component.css']
})
export class Cafc2017Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１７　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
