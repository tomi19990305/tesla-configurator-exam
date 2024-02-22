import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneContainerComponent } from './step-one-container.component';

describe('StepOneContainerComponent', () => {
    let component: StepOneContainerComponent;
    let fixture: ComponentFixture<StepOneContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StepOneContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StepOneContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
