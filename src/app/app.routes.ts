import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { IndiaComponent } from './india/india.component';
import { AmericaComponent } from './america/america.component';
import { EnglandComponent } from './england/england.component';
import { BrazilComponent } from './brazil/brazil.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'match',component:MatchComponent
    },
    {
        path:'india',component:IndiaComponent
    },
    {
        path:'america',component:AmericaComponent
    },
    {
        path:'england',component:EnglandComponent
    },
    {
        path:'brazil',component:BrazilComponent
    }
    
];
