import { TestBed } from '@angular/core/testing';

import { Cakesv1Service } from './cakesv1.service';

describe('Cakesv1Service', () => {
  let service: Cakesv1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cakesv1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
