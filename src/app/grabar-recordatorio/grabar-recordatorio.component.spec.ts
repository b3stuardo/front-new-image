import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabarRecordatorioComponent } from './grabar-recordatorio.component';

describe('GrabarRecordatorioComponent', () => {
  let component: GrabarRecordatorioComponent;
  let fixture: ComponentFixture<GrabarRecordatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrabarRecordatorioComponent]
    });
    fixture = TestBed.createComponent(GrabarRecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
