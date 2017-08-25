import { TestBed, inject } from '@angular/core/testing';

import { ClaveService } from './clave.service';

describe('ClaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClaveService]
    });
  });

  it('should be created', inject([ClaveService], (service: ClaveService) => {
    expect(service).toBeTruthy();
  }));
});
