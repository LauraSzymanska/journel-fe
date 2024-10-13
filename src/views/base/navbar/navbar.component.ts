import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
