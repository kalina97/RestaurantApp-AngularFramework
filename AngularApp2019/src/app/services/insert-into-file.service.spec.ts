import { TestBed } from '@angular/core/testing';

import { InsertIntoFileService } from './insert-into-file.service';

describe('InsertIntoFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertIntoFileService = TestBed.get(InsertIntoFileService);
    expect(service).toBeTruthy();
  });
});
