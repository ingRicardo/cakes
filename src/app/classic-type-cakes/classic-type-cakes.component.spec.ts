import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicTypeCakesComponent } from './classic-type-cakes.component';

describe('ClassicTypeCakesComponent', () => {
  let component: ClassicTypeCakesComponent;
  let fixture: ComponentFixture<ClassicTypeCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassicTypeCakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicTypeCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
