import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  userdata:any;

  constructor(private navbarService: NavbarService ,
    private _fb: FormBuilder, private toastr:ToastrService, private _service:AuthService,
    private _router:Router){
      sessionStorage.clear()
  }

  loginform=this._fb.group({
    name:this._fb.control('',Validators.required),
    password:this._fb.control('',Validators.required),
  })


  ngOnInit(): void {
    this.navbarService.hide();
  }

  ngOnDestroy(): void {
    this.navbarService.display();
  }

  proceedlogin(){
    if(this.loginform.valid){
    //   this._service.proceedregister(this.loginform.value).subscribe(res=>{
    //     this.toastr.success('Contactar al admin para otorgar acceso','Usuario registrado')
    //     this._router.navigate(['login']);
    //   });
    // }else{
    //   this.toastr.warning('Porfavor ingrese datos validos');

    this._service.getbycode(this.loginform.value.name).subscribe(res=>{
      this.userdata=res;

      console.log(this.userdata)

      if (this.userdata.password===this.loginform.value.password) {
        if (this.userdata.isactive) {
          sessionStorage.setItem('name',this.userdata.name);
          sessionStorage.setItem('role',this.userdata.role);
          this._router.navigate(['/inicio'])
        }else{
          this.toastr.error('Porfavor contacte al administrador','Este usuarios no esta activo')
        }
        
      } else {
        this.toastr.error('Datos invalidos')
      }
    })
    }
  }


}
