import { Component, Input, OnInit } from '@angular/core';
import { CarOptionModel } from '../../../../shared/models/car-option.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfiguratorFacade } from '../../../../shared/services/configurator.facade';
import { UnsubscribeOnDestroyAdapter } from '../../../../shared/adapters/unsubscribe-on-destroy-adapter';
import { OptionConfigModel } from '../../../../shared/models/option-config.model';
import { skip, startWith, tap } from 'rxjs';

@Component({
    selector: 'app-car-config-and-options-form',
    templateUrl: './car-config-and-options-form.component.html',
    styleUrl: './car-config-and-options-form.component.scss',
})
export class CarConfigAndOptionsFormComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    @Input({ required: true }) set carOptions(carOptions: CarOptionModel | undefined) {
        this._carOptions = carOptions;
        const initialValueOfConfigSelect = this.carOptionsForm.get('configSelect')?.value;
        if (initialValueOfConfigSelect) {
            this.selectedCarConfig = carOptions?.configs.find(
                (config: OptionConfigModel) => config.id === Number(initialValueOfConfigSelect)
            );
        }
    }

    get carOptions() {
        return this._carOptions;
    }

    private _carOptions: CarOptionModel | undefined;

    carOptionsForm: FormGroup;
    selectedCarConfig: OptionConfigModel | undefined;

    constructor(
        private fb: FormBuilder,
        private configuratorFacade: ConfiguratorFacade
    ) {
        super();
        this.carOptionsForm = this.fb.group({
            configSelect: [this.configuratorFacade.getCurrentConfigValue().carConfigId || undefined],
            includeYoke: [this.configuratorFacade.getCurrentConfigValue().includeYoke || false],
            includeTow: [this.configuratorFacade.getCurrentConfigValue().includeTow || false],
        });
    }

    ngOnInit(): void {
        this.handleCarConfigChanges();
        this.handleFormChanges();
    }

    private handleCarConfigChanges(): void {
        this.subs.add(
            this.carOptionsForm
                .get('configSelect')
                ?.valueChanges.pipe(
                    startWith(null),
                    skip(1),
                    tap((selectedCarConfigId: number) => {
                        if (selectedCarConfigId) {
                            this.selectedCarConfig = this.carOptions?.configs.find(
                                (config: OptionConfigModel) => config.id === Number(selectedCarConfigId)
                            );
                        }
                    })
                )
                .subscribe()
        );
    }

    private handleFormChanges(): void {
        this.subs.add(
            this.carOptionsForm.valueChanges
                .pipe(
                    tap((formValues: { configSelect: string; includeYoke: boolean; includeTow: boolean }) => {
                        this.configuratorFacade.setCurrentConfig$({
                            ...this.configuratorFacade.getCurrentConfigValue(),
                            carConfigId: formValues.configSelect ? Number(formValues.configSelect) : undefined,
                            includeTow: formValues.includeTow,
                            includeYoke: formValues.includeYoke,
                        });
                    })
                )
                .subscribe()
        );
    }
}
