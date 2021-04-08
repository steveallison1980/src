import { Injectable } from '@angular/core';
import { IPerson } from '../interfaces/iperson';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  public curPage = "home";
  public subPage = "welcomemessage";
  public view = "group";
  public curPerson: IPerson = null;

  constructor() { }
}
