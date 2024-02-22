import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'configurator',
        loadChildren: () => import('./configurator/configurator.module').then(m => m.ConfiguratorModule),
    },
    { path: '**', redirectTo: 'configurator' },
];
