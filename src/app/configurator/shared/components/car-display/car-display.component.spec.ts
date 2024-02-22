import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDisplayComponent } from './car-display.component';

describe('CarDisplayComponent', () => {
    let component: CarDisplayComponent;
    let fixture: ComponentFixture<CarDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CarDisplayComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CarDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
