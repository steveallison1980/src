import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-setsumeikaiguidepage',
  templateUrl: './setsumeikaiguidepage.component.html',
  styleUrls: ['./setsumeikaiguidepage.component.css']
})
export class SetsumeikaiguidepageComponent implements OnInit {

  constructor(
    public langService: LanguagesettingService,
    private titleService: Title) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.getTitle());
    }
  
    getTitle(){
      return "事務所説明会のご案内";
    }  

}
