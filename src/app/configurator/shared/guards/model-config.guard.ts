import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ConfiguratorFacade } from '../services/configurator.facade';
import { CurrentConfigModel } from '../models/current-config.model';

@Injectable()
export class ModelConfigGuard {
    constructor(
        private configuratorFacade: ConfiguratorFacade,
        private router: Router
    ) {}

    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean | UrlTree {
        const currentConfigValue: CurrentConfigModel = this.configuratorFacade.getCurrentConfigValue();

        if (currentConfigValue.carConfigId !== undefined) {
            return true;
        } else {
            return this.router.createUrlTree(['/models']);
        }
    }
}
