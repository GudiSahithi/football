import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatchComponent } from '../match/match.component';
import { HomeComponent } from '../home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,MatchComponent,HomeComponent,HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  
  }
  

  connectToBackend() {
    // Replace 'http://your-backend-url:port' with the actual URL of your backend server
    const backendUrl = 'http://localhost:4200/';

    // Example GET request to the backend
    this.http.get<any>(backendUrl)
      .subscribe({
        next: (response: any) => {
          console.log('Successfully connected to backend:', response);
          // Handle response from the backend as needed
        },
        error: (error: any) => {
          console.error('Error connecting to backend:', error);
          // Handle error connecting to the backend
        }
      });
      
  }
  

}
