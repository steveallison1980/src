import { Component, OnInit } from '@angular/core';
import { GuidanceService } from "../../services/guidance.service";

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.css']
})
export class GuidanceComponent implements OnInit {

  constructor(private guidanceService: GuidanceService) { }

  ngOnInit(): void {
  }

  getContent(){
    return this.guidanceService.getContent();
  }
}
