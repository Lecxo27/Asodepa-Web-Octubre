import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AnimalesService } from '../services/animales.service';
@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent {
  animalForm: FormGroup;
  selectedDate: string;
  modalAbierto: boolean = false;
  objetoSeleccionado: any;
  // animaleslista: any[];

  constructor(private _fb: FormBuilder, 
    private _AniService: AnimalesService, 
    ) {

      this.animalForm = this._fb.group({
        nombreANI: '',
        especieANI: '',
        razaANI: '',
        edadANI: '',
        generoANI: '',
        esterilizadoANI: '',
        proxEstANI: '', 
        animalDescANI: '',
        desparacitacionANI: '', 
        proxDespANI: '', 
        vacunaANI: '',
        hospedajeANI: '',
        proxVacANI: '', 
        observacionesANI: '',
      });
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses en JavaScript son base 0, por lo que se suma 1
    const year = date.getFullYear();
  
    // Formatea la fecha como "dd/mm/yyyy"
    return `${day}/${month}/${year}`;
  }

  onFormSubmit(){
    if(this.animalForm.valid){
      this._AniService.addAnimal(this.animalForm.value).subscribe({
        next: (val: any) => {
          alert('Animal añadido exitosamente')
          window.location.reload();
        },
        error: (err: any) => {
          console.error(err);
          console.error("No se puso guardar el animal nuevo");
        }
      })
    }
  }


  // modificarAnimal(animaleslista: any): void{
  //   // Realiza la acción deseada con el elemento seleccionado
  //   console.log('Acción realizada en:', animaleslista);
  // }

  // borrarAnimal(animaleslista: any): void {
  //   this._AniService.delAnimal(animaleslista.id).subscribe(() => {
  //     console.log('Adoptante Eliminado del sistema:', animaleslista);
  //     window.location.reload();
  //     // Actualiza la lista de items después de eliminar uno
  //     this.getadoptantelist();
  //   });
  // }
  // verAnimal(objeto: any){
  //   console.log("Funcionando")
  //   this.objetoSeleccionado = objeto;
  //   this.modalAbierto = true;
  // }
}
