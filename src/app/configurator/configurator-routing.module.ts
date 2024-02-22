import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepOneContainerComponent } from './step-containers/step-one/containers/step-one-container/step-one-container.component';
import { StepTwoContainerComponent } from './step-containers/step-two/containers/step-two-container/step-two-container.component';
import { ConfiguratorLayoutComponent } from './shared/components/configurator-layout/configurator-layout.component';
import { ModelCodeGuard } from './shared/guards/model-code.guard';
import { StepThreeContainerComponent } from './step-containers/step-three/containers/step-three-container/step-three-container.component';
import { ModelConfigGuard } from './shared/guards/model-config.guard';

const routes: Routes = [
    {
        path: '',
        component: ConfiguratorLayoutComponent,
        children: [
            {
                path: 'models',
                component: StepOneContainerComponent,
            },
            {
                path: 'options/:modelCode',
                component: StepTwoContainerComponent,
                canActivate: [ModelCodeGuard],
            },
            {
                path: 'summary',
                component: StepThreeContainerComponent,
                canActivate: [ModelConfigGuard],
            },
            { path: '**', redirectTo: 'models' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfiguratorRoutingModule {}
