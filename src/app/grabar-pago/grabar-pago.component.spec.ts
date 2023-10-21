import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarPagoComponent } from './grabar-pago.component';

describe('GrabarPagoComponent', () => {
  let component: GrabarPagoComponent;
  let fixture: ComponentFixture<GrabarPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarPagoComponent]
    });
    fixture = TestBed.createComponent(GrabarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
