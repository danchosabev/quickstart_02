import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const appRoutes: Routes = [
    { 
        path: '', 
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

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}