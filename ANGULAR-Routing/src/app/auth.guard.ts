import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { CourseService } from "./Services/course.service";

export const CanActivate=()=>{
    const authService = inject(AuthService);
    const router = inject(Router);
    if(authService.isAuthenticated()){
        console.log("authorized!")
        return true;
    }
    else{
        console.log("not authorized!")
        alert('DO LOGIN')
        router.navigate(['/login']);
        return false;
    } 
}
export const CanActivateChild=()=>{
    return CanActivate();
}
export const CanDeactivate=(comp: ContactComponent)=>{
    return comp.onExit();
}
export const resolve = () =>{
    const courseService: CourseService = inject(CourseService);
    return courseService.getAllcourses();
}