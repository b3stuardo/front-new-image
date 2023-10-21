import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarFacturaComponent } from './grabar-factura.component';

describe('GrabarFacturaComponent', () => {
  let component: GrabarFacturaComponent;
  let fixture: ComponentFixture<GrabarFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarFacturaComponent]
    });
    fixture = TestBed.createComponent(GrabarFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
