import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarEmpleadoComponent } from './grabar-empleado.component';

describe('GrabarEmpleadoComponent', () => {
  let component: GrabarEmpleadoComponent;
  let fixture: ComponentFixture<GrabarEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarEmpleadoComponent]
    });
    fixture = TestBed.createComponent(GrabarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
