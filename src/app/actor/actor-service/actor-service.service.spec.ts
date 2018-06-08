import { TestBed, inject } from '@angular/core/testing';

import { ActorServiceService } from './actor-service.service';

describe('ActorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorServiceService]
    });
  });

  it('should be created', inject([ActorServiceService], (service: ActorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
