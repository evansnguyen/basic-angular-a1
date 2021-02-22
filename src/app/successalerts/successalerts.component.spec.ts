import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessalertsComponent } from './successalerts.component';

describe('SuccessalertsComponent', () => {
  let component: SuccessalertsComponent;
  let fixture: ComponentFixture<SuccessalertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessalertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
