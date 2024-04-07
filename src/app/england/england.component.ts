import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-england',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,HomeComponent,MatchComponent],
  templateUrl: './england.component.html',
  styleUrl: './england.component.css'
})
export class EnglandComponent {

}
