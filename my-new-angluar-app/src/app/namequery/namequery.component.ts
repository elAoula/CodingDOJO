import { Component, OnInit } from '@angular/core';
import { StatestoreService } from '../statestore.service';

@Component({
  selector: 'app-namequery',
  templateUrl: './namequery.component.html',
  styleUrls: ['./namequery.component.css']
})
export class NamequeryComponent implements OnInit {

  constructor(private store: StatestoreService) { }

  ngOnInit() {
  }

  set name(name: string) {
    this.store.model.name = name;
    console.log(name);
  }

  get name(): string {
    return this.store.model.name;
  }
}
