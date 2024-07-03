import { Component, inject } from '@angular/core';
import { Course } from '../Models/course'
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses!: Course[]
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString!: string;

  ngOnInit() {
    //same for this, if value changes it will not get update, for that we have to use observable
    // this.searchString=this.activeRoute.snapshot.queryParamMap.get('search')||'';
    // if (this.searchString===undefined || this.searchString==='' || this.searchString===null){
    //   this.AllCourses=this.coursesService.courses;
    // }else{
    //   this.AllCourses=this.coursesService.courses.filter(x => x.title.toLowerCase()
    //   .includes(this.searchString.toLowerCase()))
    // }

    //observable
    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search') || '';
      if (this.searchString === undefined || this.searchString === '' || this.searchString === null) {
        this.coursesService.getAllcourses().subscribe((data: Course[])=>{
          this.AllCourses = data;
        })
      } else {
        this.AllCourses = this.coursesService.courses.filter(x => x.title.toLowerCase()
          .includes(this.searchString.toLowerCase()))
      }
    })
  }

}