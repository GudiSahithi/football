import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-portugal',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,HomeComponent,MatchComponent],
  templateUrl: './portugal.component.html',
  styleUrl: './portugal.component.css'
})
export class PortugalComponent {

}
