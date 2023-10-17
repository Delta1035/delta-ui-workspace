import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DButtonComponent } from './d-button.component';

describe('DButtonComponent', () => {
  let component: DButtonComponent;
  let fixture: ComponentFixture<DButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DButtonComponent]
    });
    fixture = TestBed.createComponent(DButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
