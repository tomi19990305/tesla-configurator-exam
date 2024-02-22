import { Component, Input } from '@angular/core';
import { SummaryModel } from '../../../../shared/models/summary.model';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
})
export class SummaryComponent {
    @Input({ required: true }) summary: SummaryModel | undefined;
}
