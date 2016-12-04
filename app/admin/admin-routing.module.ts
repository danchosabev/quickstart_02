    import { NgModule }             from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { AdminComponent }           from './admin.component';
    
    const adminRoutes: Routes = [
      {
        path: '',
        component: AdminComponent,
        //canActivate: [AuthGuard],
        // children: [
        //   {
        //     path: '',
        //     canActivateChild: [AuthGuard],
        //     children: [
        //       { path: 'crises', component: ManageCrisesComponent },
        //       { path: 'heroes', component: ManageHeroesComponent },
        //       { path: '', component: AdminDashboardComponent }
        //     ]
        //   }
        // ]
      }
    ];
    @NgModule({
      imports: [
        RouterModule.forChild(adminRoutes)
      ],
      exports: [
        RouterModule
      ]
    })
    export class AdminRoutingModule {}