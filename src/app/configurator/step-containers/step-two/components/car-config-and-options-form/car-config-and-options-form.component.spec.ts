import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigAndOptionsFormComponent } from './car-config-and-options-form.component';

describe('CarConfigAndOptionsFormComponent', () => {
    let component: CarConfigAndOptionsFormComponent;
    let fixture: ComponentFixture<CarConfigAndOptionsFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CarConfigAndOptionsFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CarConfigAndOptionsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
