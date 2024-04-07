import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,HomeComponent,BookingComponent],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {

}
