import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosPartidosViewComponent } from './proximos-partidos-view.component';

describe('ProximosPartidosViewComponent', () => {
  let component: ProximosPartidosViewComponent;
  let fixture: ComponentFixture<ProximosPartidosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosPartidosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosPartidosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
