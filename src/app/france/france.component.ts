import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-france',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,HomeComponent,MatchComponent],
  templateUrl: './france.component.html',
  styleUrl: './france.component.css'
})
export class FranceComponent {

}
