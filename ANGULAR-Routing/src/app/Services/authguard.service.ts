import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';
import { Course } from '../Models/course';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<ContactComponent> {
  constructor(private authService: AuthService, private router: Router) {}
  courseService: CourseService = inject(CourseService);
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {
    return component.onExit();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course>{
    return this.courseService.getAllcourses();
  }
}
