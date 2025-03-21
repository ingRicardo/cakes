import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmaintenanceComponent } from './carmaintenance.component';

describe('CarmaintenanceComponent', () => {
  let component: CarmaintenanceComponent;
  let fixture: ComponentFixture<CarmaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarmaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
