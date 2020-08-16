import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {

        if (this.loginService.isUserLogged()) {
            return false;
        }

        return true;
    }
}
