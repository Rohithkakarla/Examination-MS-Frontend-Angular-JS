import { TestBed } from '@angular/core/testing';

import { FacultyserviceService } from './facultyservice.service';

describe('FacultyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyserviceService = TestBed.get(FacultyserviceService);
    expect(service).toBeTruthy();
  });
});
