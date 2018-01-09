import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ProgramInfo } from '../model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PrograminfoserviceService {

  static kanava:string;
  apiUrl:string;

  constructor(private http: Http) { }

  getProgramInfo() : Observable<ProgramInfo> {

    console.log("HEllo Amine before parsering" + PrograminfoserviceService.kanava);
    //const x = 'Nelonen';
    this.apiUrl = '/etvrecorder//ajaxprograminfo.sl?24h='+PrograminfoserviceService.kanava;

    return this.http.get(this.apiUrl)
      .map(r=> r.json());
  }
}
