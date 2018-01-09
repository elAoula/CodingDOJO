import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamequeryComponent } from './namequery.component';

describe('NamequeryComponent', () => {
  let component: NamequeryComponent;
  let fixture: ComponentFixture<NamequeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamequeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
