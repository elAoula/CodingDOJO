import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent } from './app.component';
import {Mtv3Component } from './mtv3/mtv3.component';
import {NelonenComponent } from './nelonen/nelonen.component';

export const router: Routes = [

    {path:'', redirectTo:'mtv3', pathMatch: 'full'    },
    {path:'mtv3', component: Mtv3Component  },
    {path:'nelonen', component: NelonenComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);