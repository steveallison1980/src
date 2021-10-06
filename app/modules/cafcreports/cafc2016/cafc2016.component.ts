import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2016',
  templateUrl: './cafc2016.component.html',
  styleUrls: ['./cafc2016.component.css']
})
export class Cafc2016Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１６　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
