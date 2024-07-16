import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ProfileComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) { }
  
   onSearch() {
    this.router.navigate(['/']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}