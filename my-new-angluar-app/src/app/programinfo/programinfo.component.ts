import { Component, OnInit } from '@angular/core';
import { PrograminfoserviceService } from './programinfoservice.service';
import { ProgramInfo } from '../model';

@Component({
  selector: 'app-programinfo',
  templateUrl: './programinfo.component.html',
  styleUrls: ['./programinfo.component.css']
})
export class PrograminfoComponent implements OnInit {

  kanavaUrl:string;

  programinfo: ProgramInfo = new ProgramInfo();

  constructor(private service: PrograminfoserviceService) {
  

   }

  ngOnInit() {
    // This logic to call service for specifc page 
    //if(PrograminfoComponent.kanavaNimi == 'mtv3'){
      this.service.getProgramInfo().subscribe(
        res => this.programinfo = Object.assign(new ProgramInfo(), res));
    //}

    console.log('Kanavanimi has been set: ' + PrograminfoserviceService.kanava );
    this.kanavaUrl = 'https://api.elisaviihde.fi/' + this.service.apiUrl;
  }

/*   setKanavaNimi(kanavaNimi:string){
    this.kanavaNimi=kanavaNimi;

  } */

}
