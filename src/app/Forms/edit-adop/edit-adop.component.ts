import { FormBuilder, FormGroup} from '@angular/forms';
import { Component } from '@angular/core';
import { AdoptanteService } from 'src/app/services/adoptante.service';

@Component({
  selector: 'app-edit-adop',
  templateUrl: './edit-adop.component.html',
  styleUrls: ['./edit-adop.component.css']
})
export class EditAdopComponent {
  input: string;
  adopForm: FormGroup;

  constructor(private _fb: FormBuilder, 
    private _empService: AdoptanteService, 
    ) {

    this.adopForm = this._fb.group({
      nombreADOP: '',
      apellidoADOP: '',
      cedulaADOP: '',
      direccionADOP: '',
      referenciaADOP: '',
      TelefonoADOP: '',
      celularADOP: '',
      AnimalesADOP: '',
      
    })
  }

  onFormSubmit(){
    if(this.adopForm.valid){
      this._empService.addAdoptante(this.adopForm.value).subscribe({
        next: (val: any) => {
          alert('Adoptante añadido exitosamente')
          
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
