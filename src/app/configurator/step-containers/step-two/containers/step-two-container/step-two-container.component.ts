import { Component, Input, OnInit } from '@angular/core';
import { ConfiguratorFacade } from '../../../../shared/services/configurator.facade';
import { Observable } from 'rxjs';
import { CarOptionModel } from '../../../../shared/models/car-option.model';

@Component({
    selector: 'app-step-two-container',
    templateUrl: './step-two-container.component.html',
    styleUrls: ['./step-two-container.component.scss'],
})
export class StepTwoContainerComponent implements OnInit {
    @Input() modelCode!: string;

    carOptions$: Observable<CarOptionModel> | undefined;

    constructor(private configuratorFacade: ConfiguratorFacade) {}

    ngOnInit(): void {
        this.carOptions$ = this.configuratorFacade.getCarOptions(this.modelCode);
    }
}
