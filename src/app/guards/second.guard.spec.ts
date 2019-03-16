import { TestBed, async, inject } from '@angular/core/testing';

import { SecondGuard } from './second.guard';

describe('SecondGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondGuard]
    });
  });

  it('should ...', inject([SecondGuard], (guard: SecondGuard) => {
    expect(guard).toBeTruthy();
  }));
});
