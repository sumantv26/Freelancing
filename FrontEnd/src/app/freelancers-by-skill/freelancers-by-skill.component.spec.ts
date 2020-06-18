import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancersBySkillComponent } from './freelancers-by-skill.component';

describe('FreelancersBySkillComponent', () => {
  let component: FreelancersBySkillComponent;
  let fixture: ComponentFixture<FreelancersBySkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancersBySkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancersBySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
