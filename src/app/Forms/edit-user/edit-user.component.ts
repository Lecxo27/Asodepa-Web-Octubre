import { Subscription } from 'rxjs';
import { ToastrService} from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  constructor(private _fb: FormBuilder, private toastr:ToastrService, private _service:AuthService,
    private _dialog:MatDialogRef<EditUserComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {
      
    }


      editdata:any
      ngOnInit(): void {
          this._service.getallrole().subscribe(res =>{
            this.rolelist=res
          })
          if(this.data.usercode!=null && this.data.usercode!=''){
            this._service.getbycode(this.data.usercode).subscribe(res=>{
              this.editdata=res;
              this.registerform.setValue({id:this.editdata.id, name:this.editdata.name, email:this.editdata.email, password:this.editdata.password, gender:this.editdata.gender, role:this.editdata.role, isactive:this.editdata.isactive})
            })
          }
      }
    rolelist:any;

    registerform = this._fb.group({
      id: this._fb.control('',),
      name: this._fb.control('',),
      password: this._fb.control('',),
      email: this._fb.control('',),
      gender: this._fb.control('hombre'),
      role: this._fb.control('',Validators.required),
      isactive: this._fb.control(false),
    });
  
  updateuser(){
    if(this.registerform.valid){
      this._service.updateuser(this.registerform.value.id,this.registerform.value).subscribe(res=>{
        this.toastr.success('Usuario modificado correctamente');
        this._dialog.close();
      })
    }else{
      this.toastr.warning('Porfavor seleccione un rol');
    }
  }
}
