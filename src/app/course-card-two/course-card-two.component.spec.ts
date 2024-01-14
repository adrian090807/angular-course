import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardTwoComponent } from './course-card-two.component';

describe('CourseCardTwoComponent', () => {
  let component: CourseCardTwoComponent;
  let fixture: ComponentFixture<CourseCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
