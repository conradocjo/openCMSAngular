import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';


@Component({
  selector: 'cms-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public data: string;

  events: string[] = [];

  displayedColumns: string[] = ['nome', 'email', 'matricula', 'usuario', 'setor', 'perfil', 'status', 'dataNascimento', 'editar', 'excluir'];
  public dataSource: MatTableDataSource<any>;

  public usuarios: Usuario[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private dialog: MatDialog,
    private usuarioService: UsuarioService
  ) {

  }

  ngOnInit() {
    let dataAtual = `${new Date().getMonth()}/${new Date().getFullYear()}`;
    // this.usuarios = this.usuarioService.
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  }

  public excluir(element): void {
  }

  public editar(element): void {
    this.usuarioService.editarUsuario();
  }

  public listarTodosUsuarios(): Usuario[] {
    return null;
  }
}