import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cakesv1tabsComponent } from './cakesv1tabs.component';

describe('Cakesv1tabsComponent', () => {
  let component: Cakesv1tabsComponent;
  let fixture: ComponentFixture<Cakesv1tabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cakesv1tabsComponent]
    });
    fixture = TestBed.createComponent(Cakesv1tabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
