import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageHeaderComponent } from './mainpage-header.component';

describe('MainpageHeaderComponent', () => {
  let component: MainpageHeaderComponent;
  let fixture: ComponentFixture<MainpageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
