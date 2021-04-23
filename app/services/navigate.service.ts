import { Injectable } from '@angular/core';
import { IPerson } from '../interfaces/iperson';
import { IPublication } from '../interfaces/ipublication';
@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  public curPage = "home";
  public subPage = "welcomemessage";
  public view = "group";
  public curPerson: IPerson = null;
  public curPublication: IPublication = null;

  constructor() { }
}
