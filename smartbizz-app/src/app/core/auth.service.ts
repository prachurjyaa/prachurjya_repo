import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'Admin' },
    { username: 'ravi', password: 'ravi123', role: 'Employee' },
    { username: 'sita', password: 'sita123', role: 'Employee' }
  ];

  private currentUser: any = null;

  login(username: string, password: string): string | null {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      this.currentUser = user;
      localStorage.setItem('role', user.role);
      return user.role;
    }
    return null;
  }


  getCurrentRole(): string | null {
  return localStorage.getItem('role');
}
logout(): void {
    this.currentUser = null;
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentRole();
  }
}
