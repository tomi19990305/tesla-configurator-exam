import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeContainerComponent } from './step-three-container.component';

describe('StepThreeContainerComponent', () => {
    let component: StepThreeContainerComponent;
    let fixture: ComponentFixture<StepThreeContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StepThreeContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StepThreeContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
