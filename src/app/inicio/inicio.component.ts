import { EditAdopComponent } from './../Forms/edit-adop/edit-adop.component';
import { Component, OnInit, ViewChild} from '@angular/core';
import { AdoptanteService } from 'src/app/services/adoptante.service';





@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  inputValue: string;
  model2: Date;

  items: any[];

  // Para importar funciones de otros componentes utilizar el ViewChild importarlo junto con Component y importar el componente de la funcion
  @ViewChild(EditAdopComponent) editAdopComponent: EditAdopComponent;

    constructor( private _empService: AdoptanteService){

    }
  getadoptantelist(){
    this._empService.getAdoptante().subscribe({
      next: (res) => {
        console.log(res)
      },error: console.log
    })
  }
    ngOnInit(): void {
      this._empService.getAdoptante().subscribe(items => {
        this.items = items;
      })


    }
    modificarItem(item: any): void {
      // Realiza la acción deseada con el elemento seleccionado
      console.log('Acción realizada en:', item);
    }
    borrarItem(item: any): void {
      this._empService.delAdoptante(item.id).subscribe(() => {
        console.log('Adoptante Eliminado del sistema:', item);
        // Actualiza la lista de items después de eliminar uno
        this.getadoptantelist();
      });
    }


  onInputChange() {
    // Realiza acciones con el nuevo valor ingresado
    console.log( this.model2);
    // Otras acciones...
  }
}


