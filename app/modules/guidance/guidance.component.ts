import { Component, OnInit } from '@angular/core';
import { GuidanceService } from "../../services/guidance.service";
import { NavigateService } from '../../services/navigate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css']
})
export class GuidanceComponent implements OnInit {

  constructor(
    private guidanceService: GuidanceService,
    private route: ActivatedRoute,
    private nav: NavigateService) { }

  ngOnInit(): void {
  }

  getContent(){
    return this.guidanceService.getContent(this.route.snapshot.paramMap.get('type'));
  }

  currentPage(){
    return this.route.snapshot.paramMap.get('type');
  }
}
