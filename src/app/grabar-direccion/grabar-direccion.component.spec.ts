import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarDireccionComponent } from './grabar-direccion.component';

describe('GrabarDireccionComponent', () => {
  let component: GrabarDireccionComponent;
  let fixture: ComponentFixture<GrabarDireccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarDireccionComponent]
    });
    fixture = TestBed.createComponent(GrabarDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
