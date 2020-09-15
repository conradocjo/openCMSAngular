import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { StatusAtivoInativo } from 'src/app/model/enum/status-ativo-inativo.enum';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


@Component({
  selector: 'cms-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public data: string;

  events: string[] = [];

  displayedColumns: string[] = ['nome', 'email', 'matricula', 'usuario', 'setor', 'perfil', 'status', 'editar', 'excluir'];
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
    this.carregarListaUsuarios();
  }

  private carregarListaUsuarios() {
    this.usuarioService.listarTodosUsuarios().then((resposta) => {
      resposta.forEach(usuario => {
        usuario.statusIcone = usuario.status == StatusAtivoInativo.INATIVO ? "cancel" : "check";
      });
      this.dataSource = new MatTableDataSource(resposta);
    });
  }

  public cadastrarUsuario(): void {
    const dialogRef = this.dialog.open(CadastrarUsuarioComponent, {
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public editarUsuario(element): void {
    const dialogRef = this.dialog.open(EditarUsuarioComponent, {
      data: {usuario: element}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  }

  public excluir(element): void {
  }

  public editar(element): void {
    this.usuarioService.editarUsuario();
  }


  //TODO: Refatorar os confirms para modal.
  public ativarDesativar(element): void {
    let retorno = false;
    if (element.status == StatusAtivoInativo.ATIVO) {
      retorno = confirm("Deseja realmente inativar o usuário?")
    } else {
      retorno = confirm("Deseja realmente ativar o usuário?")
    }
    if (retorno) {
      this.usuarioService.bloquearOuDesbloquearUsuario(element.id).then(() => {
        this.carregarListaUsuarios();
      })
    }
  }

}