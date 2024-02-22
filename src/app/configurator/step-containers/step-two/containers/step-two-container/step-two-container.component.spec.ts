import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoContainerComponent } from './step-two-container.component';

describe('StepTwoContainerComponent', () => {
    let component: StepTwoContainerComponent;
    let fixture: ComponentFixture<StepTwoContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StepTwoContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(StepTwoContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
