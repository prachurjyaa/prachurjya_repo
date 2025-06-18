import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   constructor(private authService: AuthService, private router: Router) {}

  isAdmin(): boolean {
    return this.authService.getCurrentRole() === 'Admin';
  }

  isEmployee(): boolean {
    return this.authService.getCurrentRole() === 'Employee';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
