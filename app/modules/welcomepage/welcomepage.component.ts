import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../../services/welcome.service';
import { ICard } from '../../interfaces/icontent';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(
    private welcomeService: WelcomeService,
    private titleService: Title) {
   }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

  getTitle(){
    return this.welcomeService.getTitle();
  }

  getContent(){
    return this.welcomeService.getContent();
  }

  getImage(){
    return this.welcomeService.getImage();
  }

  getCardSettings(){
    var ret: ICard = {
      size: "large",
      border: true
    }
    return ret;
  }
}
