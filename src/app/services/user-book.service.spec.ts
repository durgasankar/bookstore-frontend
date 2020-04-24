import { TestBed } from '@angular/core/testing';

import { UserBookService } from './user-book.service';

describe('UserBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBookService = TestBed.get(UserBookService);
    expect(service).toBeTruthy();
  });
});
