import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';


import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {
display:boolean = false;
items: MenuItem []

  constructor( private authService: AuthService,
               private router: Router) {

    this.items = [
      {
        label: 'Principal',
        icon: 'pi pi-home',
        routerLink: [ '/dashboard' ],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Chat',
        icon: 'pi pi-comments',
        routerLink: [ '/dashboard/chat' ],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Suscriptores',
        icon: 'pi pi-envelope',
        routerLink: [ '/dashboard/suscriptors' ],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Métricas',
        icon: 'pi pi-chart-line',
        routerLink: [ '/dashboard/metrics' ],
        routerLinkActiveOptions: { exact: true },
      },
      {separator: true},
      {
        label: 'Ir a la tienda',
        icon: 'pi pi-shopping-bag',
        routerLink: [ '/' ],
        routerLinkActiveOptions: { exact: true },
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: ()=>{ this.logout() }
      },
      // {label: 'Update', icon: 'pi pi-refresh', command: () => {
      //     console.log("Boton update");
      // }},
      // {label: 'Delete', icon: 'pi pi-times', command: () => {
      //   console.log("Delete");
      // }},
      // {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      // {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
  }

  ngOnInit(): void { }

  onLeftMouseClick(event: MouseEvent, contextMenu: ContextMenu): void {
    event.stopPropagation();
    event.preventDefault();
    contextMenu.show(event);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }




}
