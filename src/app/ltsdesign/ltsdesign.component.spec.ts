import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtsdesignComponent } from './ltsdesign.component';

describe('LtsdesignComponent', () => {
  let component: LtsdesignComponent;
  let fixture: ComponentFixture<LtsdesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtsdesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtsdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
