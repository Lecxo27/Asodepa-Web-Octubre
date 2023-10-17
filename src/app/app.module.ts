// imports de funcionamiento 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// imports de ngbootstrap 
import { JsonPipe } from '@angular/common';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// imports de componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdoptanteComponent } from './adoptante/adoptante.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { KanguroComponent } from './kanguro/kanguro.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimalesComponent } from './animales/animales.component';
import { HistMedComponent } from './hist-med/hist-med.component';
import { EditAdopComponent } from './Forms/edit-adop/edit-adop.component';
import { EditAnimalComponent } from './Forms/edit-animal/edit-animal.component';

// imports de Material UI
import {MatButtonModule} from '@angular/material/button'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TablaANComponent } from './animales/tabla-an/tabla-an.component';
import { TablaAdComponent } from './adoptante/tabla-ad/tabla-ad.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    AdoptanteComponent,
    InicioComponent,
    AdminComponent,
    KanguroComponent,
    LoginComponent,
    NavBarComponent,
    AnimalesComponent,
    HistMedComponent,
    EditAdopComponent,
    EditAnimalComponent,
    TablaANComponent,
    TablaAdComponent,
    FooterComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe, NgbModule,
    MatDatepickerModule, 
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
