import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineargraphComponent } from './lineargraph.component';

describe('LineargraphComponent', () => {
  let component: LineargraphComponent;
  let fixture: ComponentFixture<LineargraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineargraphComponent]
    });
    fixture = TestBed.createComponent(LineargraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
