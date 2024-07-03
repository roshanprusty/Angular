import { Component, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((data)=>{
      const logout = Boolean(data.get('logout')); 
      if(logout){
        this.authService.logout();
        alert("Succesfully Logout "+this.authService.isLogged);
        this.router.navigate(['login'])        
      }
    })
  }
  onLogin(un: HTMLInputElement, pswd: HTMLInputElement) {
    const uname = un.value;
    const pwd = pswd.value;
    const user = this.authService.login(uname, pwd);
    if (user === undefined) alert('usernamr or password is incorrect! TRY AGAIN!')
    else {
      alert("YAAH welcome!");
      this.router.navigate(['courses']);
    }
  }

}
