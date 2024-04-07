import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IndiaComponent } from '../india/india.component';
import { EnglandComponent } from '../england/england.component';
import { BrazilComponent } from '../brazil/brazil.component';
import { PortugalComponent } from '../portugal/portugal.component';
import { FranceComponent } from '../france/france.component';
import { ArgentinaComponent } from '../argentina/argentina.component';
import { BookingComponent } from '../booking/booking.component';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,IndiaComponent,EnglandComponent,BrazilComponent,PortugalComponent,FranceComponent,ArgentinaComponent,BookingComponent,MatchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
