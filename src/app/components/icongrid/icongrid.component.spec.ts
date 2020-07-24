import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcongridComponent } from './icongrid.component';

describe('IcongridComponent', () => {
  let component: IcongridComponent;
  let fixture: ComponentFixture<IcongridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcongridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcongridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
