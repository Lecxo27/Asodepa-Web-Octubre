import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AdoptanteService } from 'src/app/services/adoptante.service';

@Component({
  selector: 'app-tabla-ad',
  templateUrl: './tabla-ad.component.html',
  styleUrls: ['./tabla-ad.component.css']
})
export class TablaAdComponent {
  adoptantelForm: FormGroup;
  data: any[]; // Arreglo para almacenar los datos
  filteredData: any[]; // Arreglo para almacenar los datos filtrados
  searchText: string; // Texto de búsqueda
  showModal: boolean = false; // Variable para controlar la visibilidad del modal
  showModal2: boolean = false; // Variable para controlar la visibilidad del modal
  selectedItem: any; // Variable para almacenar el elemento seleccionado

  constructor(private _empService: AdoptanteService, private _fb: FormBuilder,){
// Control del adoptantelForm
    this.adoptantelForm = this._fb.group({
      nombreADOP: '',
      apellidoADOP: '',
      cedulaADOP: '',
      direccionADOP: '',
      referenciaADOP: '',
      TelefonoADOP: '',
      celularADOP: '',
      AnimalesADOP: '',
    });
//Apertura y cierre del modal para el boton ver entrada
  }
  openModal(item: any): void {
    this.selectedItem = item;
    this.showModal = true;
    console.log(this.showModal);
  }

  closeModal(): void {
    this.showModal = false;
  }

  ngOnInit(): void {
    this.getData();
  }
//##########################################################

borrarItem(item: any): void {
  this._empService.delAdoptante(item.id).subscribe(() => {
    console.log('Adoptante Eliminado del sistema:', item);
    alert ("El animal fue eliminado correctamente");
    this.getData();// Actualiza la lista de items después de eliminar uno
  });
}

ModificarADOP(item: any) {
  console.log('ID del item:', this.selectedItem.id);
  console.log('Data del item:', this.adoptantelForm.value);
  this._empService.updateAdoptante( this.selectedItem.id, this.adoptantelForm.value).subscribe(
    response => {
      console.log('Adoptante actualizado:', response);
      // Aquí puedes realizar acciones adicionales después de actualizar el animal en el servidor
      this.getData();
    },
    error => {
      console.error('Error al actualizar el adoptante:', error);
      // Aquí puedes manejar el error de actualización
    }
  );
  
}

//Para obtener la data desde el servidor
  getData(): void {
    this._empService.getAdoptante().subscribe(data => {
      this.data = data;
      this.filteredData = data;
    });
  }
  //Para filtrar los resultados de la tabla al momento de introducir un input en el textbox de arriba
  filterData(): void {
    if (this.searchText) {
      const searchId = parseInt(this.searchText, 10); // Convertir el texto de búsqueda a un número entero
      const lowercaseSearchText = this.searchText.toLowerCase();
      this.filteredData = this.data.filter(item =>
        item.id === searchId || item.nombreADOP.toLowerCase().includes(lowercaseSearchText)
      );
    } else {
      this.filteredData = this.data;
    }
  }

}


