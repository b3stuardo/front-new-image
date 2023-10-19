import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarServicioComponent } from './grabar-servicio.component';

describe('GrabarServicioComponent', () => {
  let component: GrabarServicioComponent;
  let fixture: ComponentFixture<GrabarServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarServicioComponent]
    });
    fixture = TestBed.createComponent(GrabarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
