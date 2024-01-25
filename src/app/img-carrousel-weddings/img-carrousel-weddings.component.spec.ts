import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarrouselWeddingsComponent } from './img-carrousel-weddings.component';

describe('ImgCarrouselWeddingsComponent', () => {
  let component: ImgCarrouselWeddingsComponent;
  let fixture: ComponentFixture<ImgCarrouselWeddingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgCarrouselWeddingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgCarrouselWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
