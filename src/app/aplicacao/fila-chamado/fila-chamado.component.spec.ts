import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaChamadoComponent } from './fila-chamado.component';

describe('FilaChamadoComponent', () => {
  let component: FilaChamadoComponent;
  let fixture: ComponentFixture<FilaChamadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaChamadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
