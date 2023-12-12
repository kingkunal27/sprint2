import { TestBed } from '@angular/core/testing';

import { HttpuserService } from './httpuser.service';

describe('HttpuserService', () => {
  let service: HttpuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
