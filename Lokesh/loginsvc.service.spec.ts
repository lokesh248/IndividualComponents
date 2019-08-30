import { TestBed } from '@angular/core/testing';

import { LoginsvcService } from './loginsvc.service';

describe('LoginsvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginsvcService = TestBed.get(LoginsvcService);
    expect(service).toBeTruthy();
  });
});
