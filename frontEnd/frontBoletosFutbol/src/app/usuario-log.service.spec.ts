import { TestBed, inject } from '@angular/core/testing';

import { UsuarioLogService } from './usuario-log.service';

describe('UsuarioLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioLogService]
    });
  });

  it('should be created', inject([UsuarioLogService], (service: UsuarioLogService) => {
    expect(service).toBeTruthy();
  }));
});
