import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { StatusAtivoInativo } from 'src/app/model/enum/status-ativo-inativo.enum';


@Component({
  selector: 'cms-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public data: string;

  events: string[] = [];

  displayedColumns: string[] = ['nome', 'email', 'matricula', 'usuario', 'setor', 'perfil',  'status', 'editar', 'excluir'];
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
    this.usuarioService.listarTodosUsuarios().then((resposta) => {
      resposta.forEach(usuario=>{
        usuario.statusIcone = usuario.status == StatusAtivoInativo.INATIVO ? "cancel": "check";
      })
      this.dataSource = new MatTableDataSource(resposta);
    })
    console.log(this.usuarios)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastrarUsuarioComponent, {
      // data: {name: this.name, animal: this.animal}
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

  public ativarDesativar(element): void {
    if (element.visivel) {
      element.visivel = false;
    } else {
      element.visivel = true;
    }

  }

}