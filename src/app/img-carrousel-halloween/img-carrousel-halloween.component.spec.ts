import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarrouselHalloweenComponent } from './img-carrousel-halloween.component';

describe('ImgCarrouselHalloweenComponent', () => {
  let component: ImgCarrouselHalloweenComponent;
  let fixture: ComponentFixture<ImgCarrouselHalloweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgCarrouselHalloweenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgCarrouselHalloweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
