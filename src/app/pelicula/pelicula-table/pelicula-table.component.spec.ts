import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaTableComponent } from './pelicula-table.component';

describe('PeliculaTableComponent', () => {
  let component: PeliculaTableComponent;
  let fixture: ComponentFixture<PeliculaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
