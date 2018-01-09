import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { routes } from './app.router';


import { AppComponent } from './app.component';
import { NamequeryComponent } from './namequery/namequery.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { StatestoreService } from './statestore.service';
import { PrograminfoComponent } from './programinfo/programinfo.component';
import { PrograminfoserviceService } from './programinfo/programinfoservice.service';
import { Mtv3Component } from './mtv3/mtv3.component';
import { NelonenComponent } from './nelonen/nelonen.component';


@NgModule({
  declarations: [
    AppComponent,
    NamequeryComponent,
    GreetingsComponent,
    PrograminfoComponent,
    Mtv3Component,
    NelonenComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routes
  ],
  providers: [StatestoreService, PrograminfoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
