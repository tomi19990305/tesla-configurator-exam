import { Component, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }],
    templateUrl: 'app.component.html',
    styleUrl: 'app.component.scss',
})
export class AppComponent {}
