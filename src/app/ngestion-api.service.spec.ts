import { TestBed, inject } from '@angular/core/testing';

import { NgestionApiService } from './ngestion-api.service';

describe('NgestionApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgestionApiService]
    });
  });

  it('should be created', inject([NgestionApiService], (service: NgestionApiService) => {
    expect(service).toBeTruthy();
  }));
});
