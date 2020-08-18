import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class UsuarioLogadoGuard implements CanActivate {

    constructor(
        private loginService: LoginService,
        private route: ActivatedRoute,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {

        if (this.loginService.isUserLogged()) {
            return true;
        }

        this.router.navigate(['../login'], { relativeTo: this.route });

        return false;
    }
}
