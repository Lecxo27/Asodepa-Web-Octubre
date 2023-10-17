import { ToastrService} from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Component} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _fb: FormBuilder, private toastr:ToastrService, private _service:AuthService,
    private _router:Router) {}

    
  registerform = this._fb.group({
    id: this._fb.control('',Validators.compose([Validators.required, Validators.minLength(1)])),
    name: this._fb.control('', Validators.required),
    password: this._fb.control('', Validators.required),
    email: this._fb.control('',Validators.compose([Validators.required, Validators.email])),
    gender: this._fb.control('hombre'),
    role: this._fb.control(''),
    isactive: this._fb.control(false),
  });

  proceedregistation(){
    if(this.registerform.valid){
      this._service.proceedregister(this.registerform.value).subscribe(res=>{
        this.toastr.success('Contactar al admin para otorgar acceso','Usuario registrado')
        this._router.navigate(['login']);
      });
    }else{
      this.toastr.warning('Porfavor ingrese datos validos');
    }

  }
}
