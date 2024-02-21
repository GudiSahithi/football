import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IndiaComponent } from '../india/india.component';
import { HeaderComponent } from '../header/header.component';
import { AmericaComponent } from '../america/america.component';
import { EnglandComponent } from '../england/england.component';
import { BrazilComponent } from '../brazil/brazil.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,IndiaComponent,HeaderComponent,AmericaComponent,EnglandComponent,BrazilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
