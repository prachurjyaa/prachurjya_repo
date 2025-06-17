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

  constructor() { }
  /**
   * Validate login credentials
   */
 login(username: string, password: string): boolean {
  const user = this.users.find(u => u.username === username && u.password === password);
  if (user) {
    this.currentUser = user;
    return true;
  }
  return false;
}


  /**
   * Return the currently logged in user
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * Clear current user on logout
   */
  logout() {
    this.currentUser = null;
  }

  /**
   * Check if a user is logged in
   */
 isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getUserRole(): string {
    return this.currentUser?.role || '';
  }
}

