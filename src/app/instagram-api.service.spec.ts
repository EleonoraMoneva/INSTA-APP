import { TestBed } from '@angular/core/testing';

import { InstagramApiService } from './instagram-api.service';

describe('InstagramApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstagramApiService = TestBed.get(InstagramApiService);
    expect(service).toBeTruthy();
  });
});
