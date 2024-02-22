import { OptionConfigModel } from './option-config.model';

export interface CarOptionModel {
    configs: OptionConfigModel[];
    towHitch: boolean;
    yoke: boolean;
}
