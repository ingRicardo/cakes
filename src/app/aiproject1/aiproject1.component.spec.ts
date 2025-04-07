import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aiproject1Component } from './aiproject1.component';

describe('Aiproject1Component', () => {
  let component: Aiproject1Component;
  let fixture: ComponentFixture<Aiproject1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aiproject1Component]
    });
    fixture = TestBed.createComponent(Aiproject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
