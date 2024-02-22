import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CarModelModel } from '../models/car-model.model';
import { ConfiguratorApi } from './configurator.api';
import { ConfiguratorStorage } from './configurator.storage';
import { CurrentConfigModel } from '../models/current-config.model';
import { CarOptionModel } from '../models/car-option.model';

@Injectable()
export class ConfiguratorFacade {
    constructor(
        private configuratorApi: ConfiguratorApi,
        private configuratorStorage: ConfiguratorStorage
    ) {
        if (this.configuratorStorage.getCarModelsValue().length === 0) {
            this.setCarModelsFromApi();
        }
    }

    getCarModels$(): Observable<CarModelModel[]> {
        return this.configuratorStorage.getCarModels$();
    }

    getCurrentConfigValue(): CurrentConfigModel {
        return this.configuratorStorage.getCurrentConfigValue();
    }

    getCurrentConfig$(): Observable<CurrentConfigModel> {
        return this.configuratorStorage.getCurrentConfig$();
    }

    setCurrentConfig$(config: CurrentConfigModel): void {
        this.configuratorStorage.setCurrentConfig$(config);
    }

    getCarOptions(carCode: string): Observable<CarOptionModel> {
        return this.configuratorApi.getCarOptions(carCode);
    }

    private setCarModelsFromApi(): void {
        this.configuratorApi
            .getCarModels()
            .pipe(
                tap((carModels: CarModelModel[]) => {
                    this.configuratorStorage.setCarModels$(carModels);
                })
            )
            .subscribe();
    }
}
