import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageFooterComponent } from './mainpage-footer.component';

describe('MainpageFooterComponent', () => {
  let component: MainpageFooterComponent;
  let fixture: ComponentFixture<MainpageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
