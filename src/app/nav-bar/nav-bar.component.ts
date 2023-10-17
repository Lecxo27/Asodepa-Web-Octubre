import { Component, OnDestroy } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnDestroy {
    // Para ocultar la barra de navegacion al mostrar la pagina de logueo
  showNavbar: boolean = true;
  subscription: Subscription;
  constructor(private navbarService: NavbarService){
    this.subscription = this.navbarService.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
      //############################################################
}
