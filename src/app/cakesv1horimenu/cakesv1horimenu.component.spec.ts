import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cakesv1horimenuComponent } from './cakesv1horimenu.component';

describe('Cakesv1horimenuComponent', () => {
  let component: Cakesv1horimenuComponent;
  let fixture: ComponentFixture<Cakesv1horimenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cakesv1horimenuComponent]
    });
    fixture = TestBed.createComponent(Cakesv1horimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
