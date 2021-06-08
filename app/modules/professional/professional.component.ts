import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
import { ProfessionalService } from '../../services/professional.service';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from '../../interfaces/iperson';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  private pro: IPerson;

  constructor(
    public nav: NavigateService,
    private route: ActivatedRoute,
    private professionalService: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.getProfessional();
  }

  getProfessional(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.professionalService.getProfessional(id)
      .subscribe(pro => this.pro = pro);
  }

  getPerson(): IPerson{
    return this.pro;
  }
}
