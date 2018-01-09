import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrograminfoComponent } from './programinfo.component';

describe('PrograminfoComponent', () => {
  let component: PrograminfoComponent;
  let fixture: ComponentFixture<PrograminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrograminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrograminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
