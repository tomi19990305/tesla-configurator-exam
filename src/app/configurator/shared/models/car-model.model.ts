import { CarColorModel } from './car-color.model';

export interface CarModelModel {
    code: string;
    description: string;
    colors: CarColorModel[];
}
