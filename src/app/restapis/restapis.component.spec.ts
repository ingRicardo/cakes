import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestapisComponent } from './restapis.component';

describe('RestapisComponent', () => {
  let component: RestapisComponent;
  let fixture: ComponentFixture<RestapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestapisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
