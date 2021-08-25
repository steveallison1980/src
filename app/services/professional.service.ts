import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PEOPLE_DATA } from '../../assets/data/staticpeople';
import {IPerson} from '../interfaces/iperson';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor() { }

  getProfessional(id: number): Observable<IPerson> {
    const pro = PEOPLE_DATA.find(h => h.id === id)!;
    return of(pro);
  }
}
