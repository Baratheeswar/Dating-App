import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from '../app/info-page/info-page.component' ;
import { LoginComponent } from '../app/login/login.component' ;
import { RegisterComponent } from '../app/register/register.component';
import { PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:"register" , component: RegisterComponent },
  { path:"login" , component: LoginComponent },
  { path:"" , component: InfoPageComponent },
  { path:"404" , component: PageNotFoundComponent },
  { path:"**" , redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
