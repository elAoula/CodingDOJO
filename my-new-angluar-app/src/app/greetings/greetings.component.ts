import { Component, OnInit } from '@angular/core';
import { StatestoreService } from '../statestore.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  constructor(private store: StatestoreService) {  }

  ngOnInit() {
  }

  get name(): string {
    return this.store.model.name;
  }
}
