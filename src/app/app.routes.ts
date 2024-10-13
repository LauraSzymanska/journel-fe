import { Routes } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { HomepageComponent } from '../views/homepage/homepage.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomepageComponent
    }
];
