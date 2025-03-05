import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecareasComponent } from './specareas.component';

describe('SpecareasComponent', () => {
  let component: SpecareasComponent;
  let fixture: ComponentFixture<SpecareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
