import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarrouselComponent } from './img-carrousel.component';

describe('ImgCarrouselComponent', () => {
  let component: ImgCarrouselComponent;
  let fixture: ComponentFixture<ImgCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgCarrouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
