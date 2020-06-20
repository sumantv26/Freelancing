import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStoriesComponent } from './customer-stories.component';

describe('CustomerStoriesComponent', () => {
  let component: CustomerStoriesComponent;
  let fixture: ComponentFixture<CustomerStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
