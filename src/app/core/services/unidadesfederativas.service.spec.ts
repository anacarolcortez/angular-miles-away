import { TestBed } from '@angular/core/testing';

import { UnidadesfederativasService } from './unidadesfederativas.service';

describe('UnidadesfederativasService', () => {
  let service: UnidadesfederativasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesfederativasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
