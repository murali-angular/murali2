import { TestBed } from '@angular/core/testing';

import { Appser1Service } from './appser1.service';

describe('Appser1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Appser1Service = TestBed.get(Appser1Service);
    expect(service).toBeTruthy();
  });
});
