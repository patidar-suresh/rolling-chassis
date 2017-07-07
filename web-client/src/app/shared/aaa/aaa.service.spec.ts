import { TestBed, inject } from '@angular/core/testing';

import { AaaService } from './aaa.service';

describe('AaaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AaaService]
    });
  });

  it('should ...', inject([AaaService], (service: AaaService) => {
    expect(service).toBeTruthy();
  }));
});
