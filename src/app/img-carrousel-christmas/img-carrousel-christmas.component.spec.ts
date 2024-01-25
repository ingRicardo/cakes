import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarrouselChristmasComponent } from './img-carrousel-christmas.component';

describe('ImgCarrouselChristmasComponent', () => {
  let component: ImgCarrouselChristmasComponent;
  let fixture: ComponentFixture<ImgCarrouselChristmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgCarrouselChristmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgCarrouselChristmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
