import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarProductoComponent } from './grabar-producto.component';

describe('GrabarProductoComponent', () => {
  let component: GrabarProductoComponent;
  let fixture: ComponentFixture<GrabarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarProductoComponent]
    });
    fixture = TestBed.createComponent(GrabarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
