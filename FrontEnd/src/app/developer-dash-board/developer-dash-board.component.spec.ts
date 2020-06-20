import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDashBoardComponent } from './developer-dash-board.component';

describe('DeveloperDashBoardComponent', () => {
  let component: DeveloperDashBoardComponent;
  let fixture: ComponentFixture<DeveloperDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
