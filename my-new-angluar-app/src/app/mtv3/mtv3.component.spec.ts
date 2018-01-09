import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mtv3Component } from './mtv3.component';

describe('Mtv3Component', () => {
  let component: Mtv3Component;
  let fixture: ComponentFixture<Mtv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mtv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mtv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
