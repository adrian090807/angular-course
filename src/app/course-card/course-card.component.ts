import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  
  @Input()
  course:Course;
  
  @Output("courseSelected")  
  courseEmitter = new EventEmitter<Course>();
  constructor() { };
  ngOnInit() {
  }

  onCourseViewed(course:Course) {
    console.log("card component - button clicked ...");
    this.courseEmitter.emit(this.course);
  }
}
