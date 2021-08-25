import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PUBLICATIONS_DATA } from '../../assets/data/staticpublications';
import { IPublication } from '../interfaces/ipublication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor() { }

  getPublication(id: number): Observable<IPublication> {
    const pro = PUBLICATIONS_DATA.find(h => h.id === id)!;
    return of(pro);
  }
}
