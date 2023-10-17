import { FormBuilder, FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdoptanteService } from 'src/app/services/adoptante.service';

@Component({
  selector: 'app-adoptante',
  templateUrl: './adoptante.component.html',
  styleUrls: ['./adoptante.component.css']
})
export class AdoptanteComponent{
  input: string;
  data: any[]; // Arreglo para almacenar los datos
  filteredData: any[]; // Arreglo para almacenar los datos filtrados
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

  ngOnInit(): void {
    this.getData();
  }

  onFormSubmit(){
    if(this.adopForm.valid){
      this._empService.addAdoptante(this.adopForm.value).subscribe({
        next: (val: any) => {
          alert('Adoptante añadido exitosamente')
          this.ngOnInit();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }


  getData(): void {
    this._empService.getAdoptante().subscribe(data => {
      this.data = data;
    });
  }
}
