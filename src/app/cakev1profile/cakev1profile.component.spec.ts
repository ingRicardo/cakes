import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cakev1profileComponent } from './cakev1profile.component';

describe('Cakev1profileComponent', () => {
  let component: Cakev1profileComponent;
  let fixture: ComponentFixture<Cakev1profileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cakev1profileComponent]
    });
    fixture = TestBed.createComponent(Cakev1profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
