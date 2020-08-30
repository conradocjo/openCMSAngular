import { Injectable } from '@angular/core';
import { Funcionalidade } from '../model/funcionalidade';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private funcionalidadesMenu = [
    new Funcionalidade("Administração", "localhost", "engineering"),
    new Funcionalidade("Fila de chamados", "localhost", "assignment"),
    new Funcionalidade("Abrir chamado", "localhost", "bug_report"),
  ]

  private funcionalidadesMenuQuadro = [
    new Funcionalidade("Cadastrar Setor", "localhost", "add_business"),
    new Funcionalidade("Cadastrar Usuário", "localhost", "account_circle"),
    new Funcionalidade("Cadastrar Tipo de Chamado", "localhost", "addchart")
  ]

  public retornaFuncionalidadesQuadro(): Funcionalidade[] {
    return this.funcionalidadesMenuQuadro;
  }

  public retornaFuncionalidadesMenu(): Funcionalidade[] {
    return this.funcionalidadesMenu;
  }

  constructor() { }
}
