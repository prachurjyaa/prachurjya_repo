import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  role: string = '';
  app: any;

  constructor(private auth: AuthService, private router: Router) {
    const user = this.auth.getCurrentUser();
    if (user) {
      this.role = user.role;
    }
  }

  logout(): void {
    this.auth.logout();              // Clear user session
    this.router.navigate(['/']);
    this.app.displayToast();    // Redirect to login page
  }
}
