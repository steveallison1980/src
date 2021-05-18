import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public nav: NavigateService) { }

  ngOnInit(): void {
  }

  getSubPage(){
    return this.nav.subPage;
  }
  isAbout(){
    return (this.nav.subPage == "about");
  }
  isOverview(){
    return (this.nav.subPage == "overview");
  }
  isKeyfeatures(){
    return (this.nav.subPage == "keyfeatures");
  }
  isContact(){
    return (this.nav.subPage == "contact");
  }
}
