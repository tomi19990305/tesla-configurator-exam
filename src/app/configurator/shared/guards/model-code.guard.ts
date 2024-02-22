import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ConfiguratorFacade } from '../services/configurator.facade';
import { CurrentConfigModel } from '../models/current-config.model';

@Injectable()
export class ModelCodeGuard {
    constructor(
        private configuratorFacade: ConfiguratorFacade,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean | UrlTree {
        const currentConfigValue: CurrentConfigModel = this.configuratorFacade.getCurrentConfigValue();

        if (currentConfigValue.carModelCode === route.params['modelCode']) {
            return true;
        } else {
            return this.router.createUrlTree(['/models']);
        }
    }
}
