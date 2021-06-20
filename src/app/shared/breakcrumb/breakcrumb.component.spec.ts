import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakcrumbComponent } from './breakcrumb.component';

describe('BreakcrumbComponent', () => {
  let component: BreakcrumbComponent;
  let fixture: ComponentFixture<BreakcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
