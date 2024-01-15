import { TestBed } from '@angular/core/testing';

import { InsertjsonService } from './insertjson.service';

describe('InsertjsonService', () => {
  let service: InsertjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
