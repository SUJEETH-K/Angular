import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ProfileComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isAuthenticated: any;
  searchForm: FormGroup;
  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
  }
 onSearch() {
      const query = this.searchForm.get('searchQuery')?.value;
      this.router.navigate(['/product'], { queryParams: { searchQuery: query } });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}