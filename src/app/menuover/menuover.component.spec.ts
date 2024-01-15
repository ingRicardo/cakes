import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuoverComponent } from './menuover.component';

describe('MenuoverComponent', () => {
  let component: MenuoverComponent;
  let fixture: ComponentFixture<MenuoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
