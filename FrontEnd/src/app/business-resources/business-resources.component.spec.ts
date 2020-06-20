import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessResourcesComponent } from './business-resources.component';

describe('BusinessResourcesComponent', () => {
  let component: BusinessResourcesComponent;
  let fixture: ComponentFixture<BusinessResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
