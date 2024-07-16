import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink,RouterOutlet, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInitial: string = '';
  dropdownOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.userInitial) {
      const email = this.authService.getUserEmail();
      if (email) {
        this.userInitial = email.charAt(0).toUpperCase();
      }
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
    this.dropdownOpen = false; // Close dropdown after navigation
  }

  onLogout() {
    this.authService.logout();
  }
}


