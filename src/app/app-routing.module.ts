import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './list/detail/detail.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent, canActivate: [AuthGuardGuard] },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: ':id',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
