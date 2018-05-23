import { TestBed, inject } from '@angular/core/testing';

import { SampleComponentsService } from './sample-components.service';

describe('SampleComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleComponentsService]
    });
  });

  it('should be created', inject([SampleComponentsService], (service: SampleComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
