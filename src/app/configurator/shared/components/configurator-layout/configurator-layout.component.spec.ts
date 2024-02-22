import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorLayoutComponent } from './configurator-layout.component';

describe('ConfiguratorLayoutComponent', () => {
    let component: ConfiguratorLayoutComponent;
    let fixture: ComponentFixture<ConfiguratorLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfiguratorLayoutComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfiguratorLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
