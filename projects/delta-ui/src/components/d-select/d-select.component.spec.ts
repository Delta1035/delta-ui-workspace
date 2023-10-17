import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSelectComponent } from './d-select.component';

describe('DSelectComponent', () => {
  let component: DSelectComponent;
  let fixture: ComponentFixture<DSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DSelectComponent]
    });
    fixture = TestBed.createComponent(DSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
