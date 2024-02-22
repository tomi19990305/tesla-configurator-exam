import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarModelModel } from '../../../../shared/models/car-model.model';
import { skip, startWith, tap } from 'rxjs';
import { CarColorModel } from '../../../../shared/models/car-color.model';
import { UnsubscribeOnDestroyAdapter } from '../../../../shared/adapters/unsubscribe-on-destroy-adapter';
import { ConfiguratorFacade } from '../../../../shared/services/configurator.facade';

@Component({
    selector: 'app-model-choose-form',
    templateUrl: './model-choose-form.component.html',
    styleUrl: './model-choose-form.component.scss',
})
export class ModelChooseFormComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    @Input({ required: true }) carModelOptions: CarModelModel[] = [];

    carModelForm: FormGroup;
    selectedCarColors: CarColorModel[] = [];

    constructor(
        private fb: FormBuilder,
        private configuratorFacade: ConfiguratorFacade
    ) {
        super();
        this.carModelForm = this.fb.group({
            carCode: [this.configuratorFacade.getCurrentConfigValue().carModelCode || null],
            carColorCode: [this.configuratorFacade.getCurrentConfigValue().carColorCode || null],
        });
    }

    ngOnInit(): void {
        this.initSelectedCarColors();
        this.handleCarCodeChanges();
        this.handleCarColorCodeChanges();
    }

    private initSelectedCarColors(): void {
        this.selectedCarColors =
            this.carModelOptions.find(
                (carModel: CarModelModel) => carModel.code === this.carModelForm.get('carCode')?.value
            )?.colors || [];
    }

    private handleCarCodeChanges(): void {
        this.subs.add(
            this.carModelForm
                .get('carCode')
                ?.valueChanges.pipe(
                    startWith(null),
                    skip(1),
                    tap((selectedCarCode: string) => {
                        if (selectedCarCode) {
                            this.selectedCarColors =
                                this.carModelOptions.find(
                                    (carModel: CarModelModel) => carModel.code === selectedCarCode
                                )?.colors || [];
                            this.carModelForm.patchValue({ carColorCode: this.selectedCarColors[0]?.code || null });
                        }
                        this.configuratorFacade.setCurrentConfig$({
                            ...this.configuratorFacade.getCurrentConfigValue(),
                            carModelCode: selectedCarCode,
                            includeTow: false,
                            includeYoke: false,
                            carConfigId: undefined,
                        });
                    })
                )
                .subscribe()
        );
    }

    private handleCarColorCodeChanges(): void {
        this.subs.add(
            this.carModelForm
                .get('carColorCode')
                ?.valueChanges.pipe(
                    startWith(null),
                    skip(1),
                    tap((selectedCarColorCode: string) => {
                        this.configuratorFacade.setCurrentConfig$({
                            ...this.configuratorFacade.getCurrentConfigValue(),
                            carColorCode: selectedCarColorCode,
                        });
                    })
                )
                .subscribe()
        );
    }
}
