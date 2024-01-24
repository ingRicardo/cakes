import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalmenuComponent } from './horizontalmenu.component';

describe('HorizontalmenuComponent', () => {
  let component: HorizontalmenuComponent;
  let fixture: ComponentFixture<HorizontalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
