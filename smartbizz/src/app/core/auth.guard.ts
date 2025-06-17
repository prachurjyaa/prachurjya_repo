import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: (requiredRole: string) => CanActivateFn = (requiredRole: string) => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const user = auth.getCurrentUser();

    if (user && user.role === requiredRole) {
      return true;
    }

    alert('❌ Access Denied: You must be logged in as ' + requiredRole);
    router.navigate(['/']);
    return false;
  };
};
