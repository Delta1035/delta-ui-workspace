import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DInputComponent } from './d-input.component';

describe('DInputComponent', () => {
  let component: DInputComponent;
  let fixture: ComponentFixture<DInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DInputComponent]
    });
    fixture = TestBed.createComponent(DInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
