import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2018',
  templateUrl: './cafc2018.component.html',
  styleUrls: ['./cafc2018.component.css']
})
export class Cafc2018Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１８　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
