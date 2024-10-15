import { Routes } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { HomepageComponent } from '../views/homepage/homepage.component';
import { ShellComponent } from '../views/base/shell/shell.component';

export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: 
        [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomepageComponent
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },

];
