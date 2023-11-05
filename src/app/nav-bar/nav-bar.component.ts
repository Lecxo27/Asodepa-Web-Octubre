import { Component, OnDestroy, DoCheck } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnDestroy, DoCheck {
    // Para ocultar la barra de navegacion al mostrar la pagina de logueo
  showNavbar: boolean = true;
  subscription: Subscription;
  ismenurequired=false;
  isadmin=false;
  isMenuVisible=false;
  constructor(private navbarService: NavbarService, private _router:Router){
    this.subscription = this.navbarService.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngDoCheck(): void {
    let currentroute = this._router.url;
    let role=sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    }
  }
      //############################################################
}
