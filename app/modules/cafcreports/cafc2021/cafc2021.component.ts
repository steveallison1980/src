import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2021',
  templateUrl: './cafc2021.component.html',
  styleUrls: ['./cafc2021.component.css']
})
export class Cafc2021Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２０２１　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
