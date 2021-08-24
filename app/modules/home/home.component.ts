import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../services/languagesetting.service';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../../services/welcome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private langsvc: LanguagesettingService,
    private welcomeService: WelcomeService) {
      const lang = this.route.snapshot.paramMap.get('lang');
      if( lang == "en"){
        this.langsvc.toggle();
      }
    }

    
    getWelcomeImage(){
      return this.welcomeService.getImage();
    }
    getWelcomeContent(){
      return this.welcomeService.getContent();
    }
    getWelcomeTitle(){
      if( this.langsvc.lang == "en"){
        return "Welcome message from our managing partner.";
      } else {
        return "ご挨拶";
      }
    }
    getGuidanceImage(){
      return "../../../../assets/img/classroom.jpg";
    }
    getGuidanceContent(){
      if( this.langsvc.lang == "en"){
        return "Learn about Japanese patent, trademark, and design law and practice.";
      } else {
        return "TODO";
      }
    }
    getGuidanceTitle(){
      if( this.langsvc.lang == "en"){
        return "Learn about intellectual property in Japan";
      } else {
        return "TODO";
      }
    }
    getTeamImage(){
      return "../../../../assets/img/welcomemessage_large.jpg";
    }
    getTeamContent(){
      if( this.langsvc.lang == "en"){
        return "Meet our team of patent attorneys, patent engineers, and legal and technical advisors.";
      } else {
        return "メンバー紹介";
      }
    }
    getTeamTitle(){
      if( this.langsvc.lang == "en"){
        return "Meet our team";
      } else {
        return "メンバー";
      }
    }

  ngOnInit(): void {
  }
}
