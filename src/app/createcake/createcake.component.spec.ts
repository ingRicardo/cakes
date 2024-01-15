import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecakeComponent } from './createcake.component';

describe('CreatecakeComponent', () => {
  let component: CreatecakeComponent;
  let fixture: ComponentFixture<CreatecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatecakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
