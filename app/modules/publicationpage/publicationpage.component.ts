import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
import { PublicationService } from '../../services/publication.service';
import { ActivatedRoute } from '@angular/router';
import { IPublication } from '../../interfaces/ipublication';

@Component({
  selector: 'app-publicationpage',
  templateUrl: './publicationpage.component.html',
  styleUrls: ['./publicationpage.component.css']
})
export class PublicationpageComponent implements OnInit {

  private pub: IPublication;

  constructor(
    public nav: NavigateService,
    private route: ActivatedRoute,
    private publicationService: PublicationService
  ) { }

  ngOnInit(): void {
    this.getPublication();
  }

  getPublication(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.publicationService.getPublication(id)
      .subscribe(pub => this.pub = pub);
  }

  getPub(): IPublication{
    return this.pub;
  }
}
