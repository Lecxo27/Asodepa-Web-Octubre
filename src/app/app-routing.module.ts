import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptanteComponent } from './adoptante/adoptante.component';
import { InicioComponent } from './inicio/inicio.component';
import { AnimalesComponent } from './animales/animales.component';
import { LoginComponent } from './login/login.component';
import { KanguroComponent } from './kanguro/kanguro.component';
import { AdminComponent } from './admin/admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HistMedComponent } from './hist-med/hist-med.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './admin/userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '', component: InicioComponent},
  {path: 'Adoptante', component: AdoptanteComponent},
  {path: 'Animales', component: AnimalesComponent},
  {path: 'HistMed', component: HistMedComponent},
  {path: 'login', component: LoginComponent },
  {path: 'user', component: UserlistingComponent },
  {path: 'registro', component: RegisterComponent },
  {path: 'kanguro', component: KanguroComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'navbar', component: NavBarComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
