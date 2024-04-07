import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { IndiaComponent } from './india/india.component';
import { EnglandComponent } from './england/england.component';
import { BrazilComponent } from './brazil/brazil.component';
import { PortugalComponent } from './portugal/portugal.component';
import { FranceComponent } from './france/france.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { BookingComponent } from './booking/booking.component';

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
        path:'portugal',component:PortugalComponent
    },
    {
        path:'england',component:EnglandComponent
    },
    {
        path:'brazil',component:BrazilComponent
    },
    {
        path:'france',component:FranceComponent
    },
    {
        path:'argentina',component:ArgentinaComponent
    },
    {
        path:'booking',component:BookingComponent
    }
    
];
