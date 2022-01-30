import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
display:boolean = false;

  constructor( private authService: AuthService,
               private router: Router) { }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
    }


}
