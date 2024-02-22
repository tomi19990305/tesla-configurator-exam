import { Component } from '@angular/core';
import { ConfiguratorFacade } from '../../../../shared/services/configurator.facade';
import { Observable, of } from 'rxjs';
import { CarModelModel } from '../../../../shared/models/car-model.model';

@Component({
    selector: 'app-step-one-container',
    templateUrl: './step-one-container.component.html',
    styleUrl: './step-one-container.component.scss',
})
export class StepOneContainerComponent {
    carModelOptions$: Observable<CarModelModel[]> = of([]);

    constructor(private configuratorFacade: ConfiguratorFacade) {
        this.carModelOptions$ = this.configuratorFacade.getCarModels$();
    }
}
