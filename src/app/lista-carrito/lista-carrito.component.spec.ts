import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarritoComponent } from './lista-carrito.component';

describe('ListaCarritoComponent', () => {
  let component: ListaCarritoComponent;
  let fixture: ComponentFixture<ListaCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCarritoComponent]
    });
    fixture = TestBed.createComponent(ListaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
