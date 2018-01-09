import { Component, OnInit } from '@angular/core';
import { PrograminfoComponent } from '../programinfo/programinfo.component';
import { PrograminfoserviceService } from '../programinfo/programinfoservice.service';

@Component({
  selector: 'app-nelonen',
  templateUrl: './nelonen.component.html',
  styleUrls: ['./nelonen.component.css']
})
export class NelonenComponent implements OnInit {

  constructor(){
    PrograminfoserviceService.kanava = 'Nelonen';
   //this.programinfoComponent.kanavaNimi = this.kanavaNimi;
  }

  ngOnInit() {
  }

}
