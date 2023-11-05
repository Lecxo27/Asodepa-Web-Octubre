import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from 'src/app/Forms/edit-user/edit-user.component';


@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {


    constructor(private _service:AuthService, private _dialog:MatDialog){
      this.Loaduser();
    }

    userlist: any
    @ViewChild(MatPaginator) paginator !:MatPaginator;
    @ViewChild(MatSort) sort !:MatSort;
    
    dataSource:any;
    Loaduser(){
      this._service.getall().subscribe(res => {
        this.userlist = res;
        this.dataSource = new MatTableDataSource(this.userlist);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      });
    }

    displayedColumns: string[] = ['Usuario', 'Email','role', 'Status','Action'];
    
    ActualizarUsuario(code:any){
      const isMobile = window.innerWidth <= 500;
      const dialogWidth = isMobile ? '100%' : '50%';

      const popup = this._dialog.open(EditUserComponent,{
        enterAnimationDuration:'300ms',
        exitAnimationDuration:'300ms',
        width:dialogWidth,
        data:{
          usercode:code
        }
      })
      popup.afterClosed().subscribe(res => {
        this.Loaduser();
      })
    }

    opendialog(){
      
    }
}
