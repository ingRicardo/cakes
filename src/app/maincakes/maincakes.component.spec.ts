import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincakesComponent } from './maincakes.component';

describe('MaincakesComponent', () => {
  let component: MaincakesComponent;
  let fixture: ComponentFixture<MaincakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaincakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
