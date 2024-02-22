import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModelModel } from '../models/car-model.model';
import { CarOptionModel } from '../models/car-option.model';

@Injectable()
export class ConfiguratorApi {
    constructor(private http: HttpClient) {}

    getCarModels(): Observable<CarModelModel[]> {
        return this.http.get<CarModelModel[]>('/models');
    }

    getCarOptions(carCode: string): Observable<CarOptionModel> {
        return this.http.get<CarOptionModel>('/options/' + carCode);
    }
}
