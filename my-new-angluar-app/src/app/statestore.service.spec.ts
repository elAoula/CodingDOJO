import { TestBed, inject } from '@angular/core/testing';

import { StatestoreService } from './statestore.service';

describe('StatestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatestoreService]
    });
  });

  it('should be created', inject([StatestoreService], (service: StatestoreService) => {
    expect(service).toBeTruthy();
  }));
});
