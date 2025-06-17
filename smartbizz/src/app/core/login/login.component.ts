import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  users: any;
  currentUser: any;

  constructor(private auth: AuthService, private router: Router) {}

  login(username: string, password: string): boolean {
  const user = this.users.find((u: { username: string; password: string; }) => u.username === username && u.password === password);
  if (user) {
    this.currentUser = user;
    localStorage.setItem('smartbiz_user', JSON.stringify(user));  // ✅ Save in localStorage
    return true;
  }
  return false;
}


}
