import { TestBed } from '@angular/core/testing';

import { DjangocakesService } from './djangocakes.service';

describe('DjangocakesService', () => {
  let service: DjangocakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjangocakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
