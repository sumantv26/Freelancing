import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageHomeComponent } from './mainpage-home.component';

describe('MainpageHomeComponent', () => {
  let component: MainpageHomeComponent;
  let fixture: ComponentFixture<MainpageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
