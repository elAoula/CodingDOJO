import { Component, OnInit } from '@angular/core';
import { PrograminfoComponent } from '../programinfo/programinfo.component';
import { PrograminfoserviceService } from '../programinfo/programinfoservice.service';

@Component({
  selector: 'app-mtv3',
  templateUrl: './mtv3.component.html',
  styleUrls: ['./mtv3.component.css']
})
export class Mtv3Component implements OnInit {
//public kanavaNimi:string = 'mtv3';
//private service: PrograminfoserviceService;
//programinfoComponent: PrograminfoComponent = new PrograminfoComponent(this.service);

/*   constructor(private programinfoComponent: PrograminfoComponent) { //Dependency injection in the constructor
    programinfoComponent.kanavaNimi=this.kanavaNimi;

  }  */

  constructor(){
    //PrograminfoComponent.kanavaNimi = 'mtv3';
    PrograminfoserviceService.kanava = 'MTV3'
   //this.programinfoComponent.kanavaNimi = this.kanavaNimi;
  }

  ngOnInit() {

  }

}
