import { Component, OnInit } from '@angular/core';
import { GuidanceService } from "../../services/guidance.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css']
})
export class GuidanceComponent implements OnInit {

  constructor(
    private guidanceService: GuidanceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getContent(){
    var type = this.currentPage();
    return this.guidanceService.getContent(type);
  }

  currentPage(){
    console.log(this.route.snapshot.paramMap.get('type'))
    if( this.route.snapshot.paramMap.get('type') == null ) return "patent";
    return this.route.snapshot.paramMap.get('type');
  }
}
