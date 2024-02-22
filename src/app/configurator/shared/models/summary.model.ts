import { CurrentConfigModel } from './current-config.model';
import { OptionConfigModel } from './option-config.model';

export interface SummaryModel extends Partial<CurrentConfigModel> {
    carModelDescription: string;
    carColorDescription: string;
    optionConfigModel: OptionConfigModel;
    carConfigPrice: number;
    carColorPrice: number;
    towPrice: number;
    yokePrice: number;
    totalCost: number;
}
