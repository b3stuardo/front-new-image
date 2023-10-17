import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarHorarioComponent } from './grabar-horario.component';

describe('GrabarHorarioComponent', () => {
  let component: GrabarHorarioComponent;
  let fixture: ComponentFixture<GrabarHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarHorarioComponent]
    });
    fixture = TestBed.createComponent(GrabarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
