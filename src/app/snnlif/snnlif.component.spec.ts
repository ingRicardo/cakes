import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnnlifComponent } from './snnlif.component';

describe('SnnlifComponent', () => {
  let component: SnnlifComponent;
  let fixture: ComponentFixture<SnnlifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnnlifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnnlifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
