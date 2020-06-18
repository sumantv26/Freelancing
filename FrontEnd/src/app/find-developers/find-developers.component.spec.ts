import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDevelopersComponent } from './find-developers.component';

describe('FindDevelopersComponent', () => {
  let component: FindDevelopersComponent;
  let fixture: ComponentFixture<FindDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
