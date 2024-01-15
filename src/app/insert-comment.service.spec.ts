import { TestBed } from '@angular/core/testing';

import { InsertCommentService } from './insert-comment.service';

describe('InsertCommentService', () => {
  let service: InsertCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
