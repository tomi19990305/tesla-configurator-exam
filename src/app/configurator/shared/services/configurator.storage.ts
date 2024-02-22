import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CarModelModel } from '../models/car-model.model';
import { CurrentConfigModel } from '../models/current-config.model';

@Injectable()
export class ConfiguratorStorage {
    _carModels$: BehaviorSubject<CarModelModel[]>;
    _currentConfig$: BehaviorSubject<CurrentConfigModel>;
    localStorageKeyForCarModels = 'CAR_MODELS';
    localStorageKeyForCurrentConfig = 'CURRENT_CONFIG';

    constructor() {
        this._carModels$ = new BehaviorSubject<CarModelModel[]>(this.getCarModelsFromLocalStorage());
        this._currentConfig$ = new BehaviorSubject<CurrentConfigModel>(
            this.getCurrentConfigFromLocalStorage() || {
                carColorCode: undefined,
                carModelCode: undefined,
                carConfigId: undefined,
                includeYoke: false,
                includeTow: false,
            }
        );
    }

    getCarModelsValue = (): CarModelModel[] => this._carModels$.getValue();

    getCarModels$ = (): Observable<CarModelModel[]> => this._carModels$.asObservable();

    setCarModels$ = (carModels: CarModelModel[]): void => {
        this.saveCarModelsToLocalStorage(carModels);
        this._carModels$.next([...carModels]);
    };

    getCurrentConfigValue = (): CurrentConfigModel => this._currentConfig$.getValue();
    getCurrentConfig$ = (): Observable<CurrentConfigModel> => this._currentConfig$.asObservable();

    setCurrentConfig$ = (config: CurrentConfigModel): void => {
        this.saveCurrentConfigToLocalStorage(config);
        this._currentConfig$.next(config);
    };

    private saveCarModelsToLocalStorage(carModels: CarModelModel[]): void {
        localStorage.setItem(this.localStorageKeyForCarModels, JSON.stringify(carModels || []));
    }

    private getCarModelsFromLocalStorage(): CarModelModel[] {
        return JSON.parse(localStorage.getItem(this.localStorageKeyForCarModels) || '[]');
    }

    private saveCurrentConfigToLocalStorage(config: CurrentConfigModel): void {
        localStorage.setItem(this.localStorageKeyForCurrentConfig, JSON.stringify(config || ''));
    }

    private getCurrentConfigFromLocalStorage(): CurrentConfigModel | null {
        return JSON.parse(localStorage.getItem(this.localStorageKeyForCurrentConfig) || 'null');
    }
}
