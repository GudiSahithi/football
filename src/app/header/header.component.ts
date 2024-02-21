import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MatchComponent } from '../match/match.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent,MatchComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
