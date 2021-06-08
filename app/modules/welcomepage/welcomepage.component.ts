import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../../services/welcome.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(
    private welcomeService: WelcomeService) {
   }

  ngOnInit(): void {
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
}
