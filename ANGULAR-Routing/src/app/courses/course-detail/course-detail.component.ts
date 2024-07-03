import { Component, inject } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  selectedCourse: Course = new Course();
  courseId!: number;
  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // const id = this.activeRoute.snapshot.paramMap.get('id');
    // this.courseId = id ? +id : 0; // Use a default value if id is null
    // this.selectedCourse=this.courseService.courses[this.courseId];
    // // console.log(this.courseId);
    // // console.log(this.selectedCourse);

    this.activeRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.courseId = +id;
        this.selectedCourse = this.courseService.courses[this.courseId];
      }
    });
  }
}
