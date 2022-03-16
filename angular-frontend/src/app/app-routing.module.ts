import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInsuredComponent } from './create-insured/create-insured.component';
import { DetailInsuredComponent } from './detail-insured/detail-insured.component';
import { ListInsuredComponent } from './list-insured/list-insured.component';
import { LoginComponent } from './login/login.component';
import { UpdateInsuredComponent } from './update-insured/update-insured.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'insured-list', component: ListInsuredComponent},
  {path: 'insured-details/:id', component: DetailInsuredComponent},
  {path: 'insured-create', component: CreateInsuredComponent},
  {path: 'insured-update/:id', component: UpdateInsuredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
