import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { StatusAtivoInativo } from 'src/app/model/enum/status-ativo-inativo.enum';
import { MatPaginator } from '@angular/material/paginator';
import { CadastrarSetorComponent } from './cadastrar-setor/cadastrar-setor.component';
import { EditarSetorComponent } from './editar-setor/editar-setor.component';
import { SetorService } from 'src/app/services/setor.service';
import { Setor } from 'src/app/model/setor';

@Component({
  selector: 'cms-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {
  
  public data: string;

  events: string[] = [];

  displayedColumns: string[] = ['id', 'nome', 'status', 'editar', 'excluir'];
  public dataSource: MatTableDataSource<Setor>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public setores: Array<Setor>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  }

  constructor(
    private dialog: MatDialog,
    private usuarioService: UsuarioService,
    private setorService: SetorService
  ) {

  }

  ngOnInit() {
    this.setorService.testeDocker();
    this.carregarListaSetor();
  }

  private carregarListaSetor() {
    this.setorService.retornarListaDeSetores().then((resposta) => {
      resposta.forEach(setor => {
        setor.statusIcone = setor.status == StatusAtivoInativo.INATIVO ? "cancel" : "check";
      });
      this.dataSource = new MatTableDataSource<Setor>(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  public cadastrarSetor(): void {
    const dialogRef = this.dialog.open(CadastrarSetorComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.carregarListaSetor();
    });
  }

  public editarSetor(element): void {
    const dialogRef = this.dialog.open(EditarSetorComponent, {
      data: { usuario: element }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.carregarListaSetor();
    });
  }

  public excluir(element): void {
    let respota = confirm(`Deseja realmente deletar o Setor ${element.nome}`)
    if (respota) {
      this.setorService.deletarSetor(element).then(() => {
        alert(`Setor ${element.nome} deletado.`)
      }).then(() => {
        this.carregarListaSetor();
      })
    }

  }

  //TODO: Refatorar os confirms para modal.
  public ativarDesativar(element): void {
    let retorno = false;
    if (element.status == StatusAtivoInativo.ATIVO) {
      retorno = confirm("Deseja realmente inativar o setor?")
    } else {
      retorno = confirm("Deseja realmente ativar o setor?")
    }
    if (retorno) {
      this.setorService.bloquearOuDesbloquearSetor(element.id).then(() => {
        if (element.status == StatusAtivoInativo.ATIVO) {
          alert("Setor bloqueado com sucesso.")
        } else {
          alert("Setor ativado com sucesso.")
        }
      }).then(() => this.carregarListaSetor())
    }
  }


}
