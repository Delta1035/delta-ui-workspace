import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAlertComponent } from './d-alert.component';

describe('DAlertComponent', () => {
  let component: DAlertComponent;
  let fixture: ComponentFixture<DAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DAlertComponent]
    });
    fixture = TestBed.createComponent(DAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
