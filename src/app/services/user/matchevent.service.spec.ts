import { TestBed } from '@angular/core/testing';

import { MatcheventService } from './matchevent.service';

describe('MatcheventService', () => {
  let service: MatcheventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatcheventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
