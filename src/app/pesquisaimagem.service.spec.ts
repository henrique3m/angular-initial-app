import { TestBed, inject } from '@angular/core/testing';

import { PesquisaimagemService } from './pesquisaimagem.service';

describe('PesquisaimagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaimagemService]
    });
  });

  it('should be created', inject([PesquisaimagemService], (service: PesquisaimagemService) => {
    expect(service).toBeTruthy();
  }));
});
