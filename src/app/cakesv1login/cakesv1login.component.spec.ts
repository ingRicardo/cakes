import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cakesv1loginComponent } from './cakesv1login.component';

describe('Cakesv1loginComponent', () => {
  let component: Cakesv1loginComponent;
  let fixture: ComponentFixture<Cakesv1loginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cakesv1loginComponent]
    });
    fixture = TestBed.createComponent(Cakesv1loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
