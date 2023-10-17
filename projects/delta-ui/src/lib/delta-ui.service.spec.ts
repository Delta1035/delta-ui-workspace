import { TestBed } from '@angular/core/testing';

import { DeltaUiService } from './delta-ui.service';

describe('DeltaUiService', () => {
  let service: DeltaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeltaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
