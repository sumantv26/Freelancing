import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevpofileComponent } from './devpofile.component';

describe('DevpofileComponent', () => {
  let component: DevpofileComponent;
  let fixture: ComponentFixture<DevpofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevpofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevpofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
