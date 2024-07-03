import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { PopularComponent } from "./home/popular/popular.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CanActivate, CanActivateChild, CanDeactivate } from "./auth.guard";
import { AuthGuardService } from "./Services/authguard.service";

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent, canDeactivate:[AuthGuardService] },
  { path: 'courses', component: CoursesComponent, resolve: [AuthGuardService]},
  // { path: 'courses/course/:id', component: CourseDetailComponent },
  {
    path: 'courses', canActivateChild:[CanActivateChild], children: [
      {path: 'course/:id', component: CourseDetailComponent},
      {path: 'popular', component: PopularComponent},
      // {path: 'checkout', component: CheckoutComponent, data:{name:"Test Course", price:420}}
      {path: 'checkout', component: CheckoutComponent}
      // {path: 'checkout', component: CheckoutComponent, canActivate: [CanActivate]}
    ]
  },
  {path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule{

}