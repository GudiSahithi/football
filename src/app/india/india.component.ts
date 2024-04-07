import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-india',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive,HomeComponent,MatchComponent],
  templateUrl: './india.component.html',
  styleUrl: './india.component.css'
})
export class IndiaComponent {

}
