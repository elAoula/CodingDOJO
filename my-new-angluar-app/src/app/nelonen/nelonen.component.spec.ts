import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NelonenComponent } from './nelonen.component';

describe('NelonenComponent', () => {
  let component: NelonenComponent;
  let fixture: ComponentFixture<NelonenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NelonenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NelonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
