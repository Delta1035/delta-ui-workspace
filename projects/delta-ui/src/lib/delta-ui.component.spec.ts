import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltaUiComponent } from './delta-ui.component';

describe('DeltaUiComponent', () => {
  let component: DeltaUiComponent;
  let fixture: ComponentFixture<DeltaUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeltaUiComponent]
    });
    fixture = TestBed.createComponent(DeltaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
