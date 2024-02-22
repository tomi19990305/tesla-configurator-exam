import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelChooseFormComponent } from './model-choose-form.component';

describe('ModelChooseFormComponent', () => {
    let component: ModelChooseFormComponent;
    let fixture: ComponentFixture<ModelChooseFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModelChooseFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModelChooseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
