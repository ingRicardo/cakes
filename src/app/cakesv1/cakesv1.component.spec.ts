import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cakesv1Component } from './cakesv1.component';

describe('Cakesv1Component', () => {
  let component: Cakesv1Component;
  let fixture: ComponentFixture<Cakesv1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cakesv1Component]
    });
    fixture = TestBed.createComponent(Cakesv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
