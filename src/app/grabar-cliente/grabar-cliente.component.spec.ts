import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarClienteComponent } from './grabar-cliente.component';

describe('GrabarClienteComponent', () => {
  let component: GrabarClienteComponent;
  let fixture: ComponentFixture<GrabarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarClienteComponent]
    });
    fixture = TestBed.createComponent(GrabarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
