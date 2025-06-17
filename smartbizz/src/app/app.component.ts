import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'smartbizz';
  showToast = false;

displayToast() {
  this.showToast = true;
  setTimeout(() => this.showToast = false, 3000); // Hide after 3 sec
}


  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
   getUserRole(): string {
    return this.authService.getCurrentUser()?.role || '';
  }
}
