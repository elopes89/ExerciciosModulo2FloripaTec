import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isLoggedIn)
  return false;
  else
  return true;
};

export const acessarModuloPrivadoGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLoggedIn;
}


