import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovervehicleComponent } from './covervehicle.component';

describe('CovervehicleComponent', () => {
  let component: CovervehicleComponent;
  let fixture: ComponentFixture<CovervehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovervehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovervehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
