import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-brazil',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,HomeComponent,MatchComponent],
  templateUrl: './brazil.component.html',
  styleUrl: './brazil.component.css'
})
export class BrazilComponent {

}
