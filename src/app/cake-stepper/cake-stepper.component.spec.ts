import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeStepperComponent } from './cake-stepper.component';

describe('CakeStepperComponent', () => {
  let component: CakeStepperComponent;
  let fixture: ComponentFixture<CakeStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CakeStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CakeStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
