import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOfDeshboardComponent } from './header-of-deshboard.component';

describe('HeaderOfDeshboardComponent', () => {
  let component: HeaderOfDeshboardComponent;
  let fixture: ComponentFixture<HeaderOfDeshboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOfDeshboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOfDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
