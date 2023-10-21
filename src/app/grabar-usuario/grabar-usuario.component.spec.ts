import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarUsuarioComponent } from './grabar-usuario.component';

describe('GrabarUsuarioComponent', () => {
  let component: GrabarUsuarioComponent;
  let fixture: ComponentFixture<GrabarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarUsuarioComponent]
    });
    fixture = TestBed.createComponent(GrabarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
