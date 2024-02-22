import { Component } from '@angular/core';
import { NavigationStepModel } from '../../models/navigation-step.model';
import { UnsubscribeOnDestroyAdapter } from '../../adapters/unsubscribe-on-destroy-adapter';
import { ConfiguratorFacade } from '../../services/configurator.facade';
import { tap } from 'rxjs';
import { CurrentConfigModel } from '../../models/current-config.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends UnsubscribeOnDestroyAdapter {
    navigationSteps: NavigationStepModel[] = [];

    constructor(private configuratorFacade: ConfiguratorFacade) {
        super();
        this.subs.sink = this.configuratorFacade
            .getCurrentConfig$()
            .pipe(
                tap((currentConfig: CurrentConfigModel) => {
                    this.navigationSteps = [
                        {
                            label: 'Step 1',
                            routerLink: ['models'],
                        },
                        {
                            label: 'Step 2',
                            routerLink: ['options/' + currentConfig.carModelCode],
                            disabled: currentConfig.carModelCode === undefined,
                        },
                        {
                            label: 'Step 3',
                            routerLink: ['summary'],
                            disabled: currentConfig.carConfigId === undefined,
                        },
                    ];
                })
            )
            .subscribe();
    }
}
