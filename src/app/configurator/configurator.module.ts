import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { ConfiguratorRoutingModule } from './configurator-routing.module';
import { StepOneContainerComponent } from './step-containers/step-one/containers/step-one-container/step-one-container.component';
import { CarDisplayComponent } from './shared/components/car-display/car-display.component';
import { ModelChooseFormComponent } from './step-containers/step-one/components/model-choose-form/model-choose-form.component';
import { ConfiguratorApi } from './shared/services/configurator.api';
import { ConfiguratorFacade } from './shared/services/configurator.facade';
import { HttpClientModule } from '@angular/common/http';
import { ConfiguratorStorage } from './shared/services/configurator.storage';
import { ReactiveFormsModule } from '@angular/forms';
import { StepTwoContainerComponent } from './step-containers/step-two/containers/step-two-container/step-two-container.component';
import { ConfiguratorLayoutComponent } from './shared/components/configurator-layout/configurator-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ModelCodeGuard } from './shared/guards/model-code.guard';
import { CarConfigAndOptionsFormComponent } from './step-containers/step-two/components/car-config-and-options-form/car-config-and-options-form.component';
import { OptionConfigPipe } from './shared/pipes/option-config.pipe';
import { StepThreeContainerComponent } from './step-containers/step-three/containers/step-three-container/step-three-container.component';
import { ModelConfigGuard } from './shared/guards/model-config.guard';
import { SummaryComponent } from './step-containers/step-three/components/summary/summary.component';

@NgModule({
    declarations: [
        StepOneContainerComponent,
        CarDisplayComponent,
        ModelChooseFormComponent,
        StepOneContainerComponent,
        StepTwoContainerComponent,
        ConfiguratorLayoutComponent,
        HeaderComponent,
        CarConfigAndOptionsFormComponent,
        OptionConfigPipe,
        StepThreeContainerComponent,
        SummaryComponent,
    ],
    imports: [CommonModule, ConfiguratorRoutingModule, HttpClientModule, ReactiveFormsModule, CurrencyPipe],
    providers: [
        ConfiguratorApi,
        ConfiguratorFacade,
        ConfiguratorStorage,
        ModelCodeGuard,
        OptionConfigPipe,
        CurrencyPipe,
        ModelConfigGuard,
    ],
})
export class ConfiguratorModule {}
