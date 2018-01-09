import { TestBed, inject } from '@angular/core/testing';

import { PrograminfoserviceService } from './programinfoservice.service';

describe('PrograminfoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrograminfoserviceService]
    });
  });

  it('should be created', inject([PrograminfoserviceService], (service: PrograminfoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
