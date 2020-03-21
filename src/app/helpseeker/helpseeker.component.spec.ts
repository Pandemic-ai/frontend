import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpseekerComponent } from './helpseeker.component';

describe('HelpseekerComponent', () => {
  let component: HelpseekerComponent;
  let fixture: ComponentFixture<HelpseekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpseekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
