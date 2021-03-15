import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hamburgerState: boolean = false;
  public clickHamburger(){
    this.hamburgerState = !this.hamburgerState;
  }
  curPage: string = "home";
  public clickHome(){
    this.curPage = "home";
  }
  public clickAboutus(){
    this.curPage = "aboutus";
  }
  public clickProfessionals(){
    this.curPage = "professionals";
  }
  public clickOurservices(){
    this.curPage = "ourservices";
  }
  public clickCareers(){
    this.curPage = "careers";
  }
}
