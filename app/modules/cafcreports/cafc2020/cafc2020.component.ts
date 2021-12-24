import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2020',
  templateUrl: './cafc2020.component.html',
  styleUrls: ['./cafc2020.component.css']
})
export class Cafc2020Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２０２０　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
