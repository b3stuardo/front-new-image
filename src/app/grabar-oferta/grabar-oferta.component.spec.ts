import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarOfertaComponent } from './grabar-oferta.component';

describe('GrabarOfertaComponent', () => {
  let component: GrabarOfertaComponent;
  let fixture: ComponentFixture<GrabarOfertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarOfertaComponent]
    });
    fixture = TestBed.createComponent(GrabarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
