import { Component } from '@angular/core';
import { ConfiguratorFacade } from '../../services/configurator.facade';
import { UnsubscribeOnDestroyAdapter } from '../../adapters/unsubscribe-on-destroy-adapter';
import { tap } from 'rxjs';
import { CurrentConfigModel } from '../../models/current-config.model';

@Component({
    selector: 'app-car-display',
    templateUrl: './car-display.component.html',
    styleUrl: './car-display.component.scss',
})
export class CarDisplayComponent extends UnsubscribeOnDestroyAdapter {
    carModelCode: string | undefined;
    carColorCode: string | undefined;

    constructor(private configuratorFacade: ConfiguratorFacade) {
        super();
        this.subs.sink = this.configuratorFacade
            .getCurrentConfig$()
            .pipe(
                tap((currentConfig: CurrentConfigModel) => {
                    this.carModelCode = currentConfig.carModelCode;
                    this.carColorCode = currentConfig.carColorCode;
                })
            )
            .subscribe();
    }
}
