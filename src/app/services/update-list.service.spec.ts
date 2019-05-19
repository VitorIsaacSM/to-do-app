import { TestBed } from '@angular/core/testing';

import { UpdateListService } from './update-list.service';

describe('UpdateListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateListService = TestBed.get(UpdateListService);
    expect(service).toBeTruthy();
  });
});
