import { TestBed } from '@angular/core/testing';

import { AdminBookOperationService } from './admin-book-operation.service';

describe('AdminBookOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminBookOperationService = TestBed.get(AdminBookOperationService);
    expect(service).toBeTruthy();
  });
});
