import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPartidosComponent } from './view-partidos.component';

describe('ViewPartidosComponent', () => {
  let component: ViewPartidosComponent;
  let fixture: ComponentFixture<ViewPartidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPartidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
