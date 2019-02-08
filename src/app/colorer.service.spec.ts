import { TestBed } from '@angular/core/testing';

import { ColorerService } from './colorer.service';

describe('ColorerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorerService = TestBed.get(ColorerService);
    expect(service).toBeTruthy();
  });
});
