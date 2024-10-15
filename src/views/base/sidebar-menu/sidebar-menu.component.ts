import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    MatSidenav, 
    MatNavList, 
    MatSidenavContent, 
    MatSidenavContainer,
    RouterOutlet, 
    RouterModule,
    MatToolbar, 
    MatIcon, 
    NavbarComponent
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {

}
