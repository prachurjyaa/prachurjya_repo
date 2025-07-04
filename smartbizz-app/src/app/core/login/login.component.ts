import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const role = this.authService.login(this.username, this.password);
    if (role === 'Admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'Employee') {
      this.router.navigate(['/employee']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
