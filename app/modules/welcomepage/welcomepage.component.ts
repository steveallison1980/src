import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../../services/welcome.service';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private langsvc: LanguagesettingService,
    private welcomeService: WelcomeService) {
      const lang = this.route.snapshot.paramMap.get('lang');
      if( lang == "en"){
        this.langsvc.toggle();
      }
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
