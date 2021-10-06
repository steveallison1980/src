import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-workenvironment',
  templateUrl: './workenvironment.component.html',
  styleUrls: ['./workenvironment.component.css']
})
export class WorkenvironmentComponent implements OnInit {

  constructor(
    public langService: LanguagesettingService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

  getTitle(){
    return "仕事環境";
  }  

}
