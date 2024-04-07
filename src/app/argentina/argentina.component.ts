import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-argentina',
  standalone: true,
  imports: [HomeComponent,RouterLink,RouterLinkActive,RouterOutlet,MatchComponent],
  templateUrl: './argentina.component.html',
  styleUrl: './argentina.component.css'
})
export class ArgentinaComponent {

}
