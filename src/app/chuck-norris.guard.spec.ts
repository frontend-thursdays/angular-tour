import { TestBed, async, inject } from '@angular/core/testing';

import { ChuckNorrisGuard } from './chuck-norris.guard';

describe('ChuckNorrisGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckNorrisGuard]
    });
  });

  it('should ...', inject([ChuckNorrisGuard], (guard: ChuckNorrisGuard) => {
    expect(guard).toBeTruthy();
  }));
});
