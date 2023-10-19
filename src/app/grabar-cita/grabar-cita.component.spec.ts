import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarCitaComponent } from './grabar-cita.component';

describe('GrabarCitaComponent', () => {
  let component: GrabarCitaComponent;
  let fixture: ComponentFixture<GrabarCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarCitaComponent]
    });
    fixture = TestBed.createComponent(GrabarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
