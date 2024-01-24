import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelangComponent } from './changelang.component';

describe('ChangelangComponent', () => {
  let component: ChangelangComponent;
  let fixture: ComponentFixture<ChangelangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangelangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangelangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
