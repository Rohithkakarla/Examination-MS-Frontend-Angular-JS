import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultypageComponent } from './facultypage.component';

describe('FacultypageComponent', () => {
  let component: FacultypageComponent;
  let fixture: ComponentFixture<FacultypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
