import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorArruselComponent } from './actor-arrusel.component';

describe('ActorArruselComponent', () => {
  let component: ActorArruselComponent;
  let fixture: ComponentFixture<ActorArruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorArruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorArruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
