import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const appRoutes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent 
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        //canLoad: [AuthGuard]
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);