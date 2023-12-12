import { TestBed } from '@angular/core/testing';

import { HttpseatService } from './httpseat.service';

describe('HttpseatService', () => {
  let service: HttpseatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpseatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
