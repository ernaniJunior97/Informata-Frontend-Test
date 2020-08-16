import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class ListaProdutosGuard implements CanActivate {

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

        this.router.navigate(['login'], { relativeTo: this.route });

        return false;
    }
}
