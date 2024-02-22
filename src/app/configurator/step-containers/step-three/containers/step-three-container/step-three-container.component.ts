import { Component, Input, OnInit } from '@angular/core';
import { ConfiguratorFacade } from '../../../../shared/services/configurator.facade';
import { SummaryModel } from '../../../../shared/models/summary.model';
import { UnsubscribeOnDestroyAdapter } from '../../../../shared/adapters/unsubscribe-on-destroy-adapter';
import { combineLatest, tap } from 'rxjs';
import { CarModelModel } from '../../../../shared/models/car-model.model';
import { CurrentConfigModel } from '../../../../shared/models/current-config.model';
import { CarColorModel } from '../../../../shared/models/car-color.model';
import { CarOptionModel } from '../../../../shared/models/car-option.model';
import { OptionConfigModel } from '../../../../shared/models/option-config.model';

@Component({
    selector: 'app-step-three-container',
    templateUrl: './step-three-container.component.html',
    styleUrl: './step-three-container.component.scss',
})
export class StepThreeContainerComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    @Input() modelCode!: string;

    summary: SummaryModel | undefined;

    constructor(private configuratorFacade: ConfiguratorFacade) {
        super();
    }

    ngOnInit(): void {
        this.subs.sink = combineLatest([
            this.configuratorFacade.getCarModels$(),
            this.configuratorFacade.getCurrentConfig$(),
            this.configuratorFacade.getCarOptions(this.configuratorFacade.getCurrentConfigValue().carModelCode || ''),
        ])
            .pipe(
                tap(([carModels, currentConfig, carOptions]: [CarModelModel[], CurrentConfigModel, CarOptionModel]) => {
                    const currentCarModel: CarModelModel | undefined = carModels.find(
                        (carModel: CarModelModel) => carModel.code === currentConfig.carModelCode
                    );

                    const currentOptionConfig: OptionConfigModel | undefined = carOptions.configs.find(
                        (config: OptionConfigModel) => config.id === currentConfig.carConfigId
                    );

                    if (currentCarModel && currentOptionConfig) {
                        const currentCarColorModel: CarColorModel | undefined = currentCarModel?.colors.find(
                            (color: CarColorModel) => color.code === currentConfig.carColorCode
                        );

                        const towPrice = 1000;
                        const yokePrice = 1000;

                        let totalCost: number = currentOptionConfig.price + (currentCarColorModel?.price || 0);
                        if (currentConfig.includeTow) totalCost += towPrice;
                        if (currentConfig.includeYoke) totalCost += yokePrice;

                        if (currentCarColorModel) {
                            this.summary = {
                                carModelDescription: currentCarModel.description,
                                optionConfigModel: currentOptionConfig,
                                carColorDescription: currentCarColorModel.description,
                                carColorPrice: currentCarColorModel.price || 0,
                                carConfigPrice: currentOptionConfig.price || 0,
                                includeTow: currentConfig.includeTow,
                                includeYoke: currentConfig.includeYoke,
                                towPrice: towPrice,
                                yokePrice: yokePrice,
                                totalCost: totalCost,
                            };
                        }
                    }
                })
            )
            .subscribe();
    }
}
