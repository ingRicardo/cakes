import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintlistComponent } from './maintlist.component';

describe('MaintlistComponent', () => {
  let component: MaintlistComponent;
  let fixture: ComponentFixture<MaintlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintlistComponent]
    });
    fixture = TestBed.createComponent(MaintlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
